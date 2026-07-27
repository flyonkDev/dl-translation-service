# Local dev PostgreSQL control (portable install, Windows).
# Defaults match the D:\tools\pg16 layout; override via IDP_PG_HOME / IDP_PG_DATA.
# Usage: npm run db:start | db:stop | db:status   (from apps/backend)
# NOTE: keep this file ASCII-only - Windows PowerShell 5.1 misparses
# UTF-8-without-BOM scripts that contain non-ASCII characters.
param(
    [ValidateSet('start', 'stop', 'status')]
    [string]$Action = 'start'
)

$pgHome = if ($env:IDP_PG_HOME) { $env:IDP_PG_HOME } else { 'D:\tools\pg16\pgsql' }
$pgData = if ($env:IDP_PG_DATA) { $env:IDP_PG_DATA } else { 'D:\tools\pg16\data' }
$pgCtl = Join-Path $pgHome 'bin\pg_ctl.exe'
$logFile = Join-Path (Split-Path $pgData -Parent) 'pg.log'

function Test-Pg {
    try {
        $c = New-Object Net.Sockets.TcpClient
        $c.Connect('localhost', 5432)
        $c.Close()
        return $true
    } catch { return $false }
}

if (-not (Test-Path $pgCtl)) {
    Write-Host "pg_ctl not found at $pgCtl - portable PostgreSQL is not installed on this machine." -ForegroundColor Yellow
    Write-Host "Set IDP_PG_HOME/IDP_PG_DATA or install per CLAUDE.md 'Local dev database' note." -ForegroundColor Yellow
    exit 0
}

switch ($Action) {
    'status' {
        if (Test-Pg) { Write-Host 'PostgreSQL: RUNNING on :5432' -ForegroundColor Green }
        else { Write-Host 'PostgreSQL: not running' -ForegroundColor Yellow }
    }
    'start' {
        if (Test-Pg) { Write-Host 'PostgreSQL already running on :5432' -ForegroundColor Green; exit 0 }
        & $pgCtl -D $pgData -l $logFile start
        exit $LASTEXITCODE
    }
    'stop' {
        if (-not (Test-Pg)) { Write-Host 'PostgreSQL is not running' -ForegroundColor Yellow; exit 0 }
        & $pgCtl -D $pgData stop
        exit $LASTEXITCODE
    }
}
