/**
 * Preview script — renders sample PDFs for design/QA review.
 * Run from apps/backend: `npx tsx scripts/preview-pdf.ts`
 *
 * Generates 4 variants in apps/backend/scripts/preview-output/:
 *   1. short-en.pdf — short EN name (baseline)
 *   2. long-en.pdf — LONG EN name + long country (overflow test)
 *   3. cyrillic.pdf — Cyrillic name (Unicode font test)
 *   4. debug.pdf — debug=true (shows field anchor points + boxes)
 */
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { ApplicationsPdfService } from '../src/applications/applications-pdf.service';
import type { ApplicationSnapshot } from '../src/applications/types';

const OUT_DIR = path.resolve(__dirname, 'preview-output');

async function makePlaceholderHeadshot(): Promise<string> {
	const tmpPath = path.join(OUT_DIR, '_tmp-headshot.png');
	const svg = `
		<svg width="400" height="500" xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill="#e5e7eb"/>
			<circle cx="200" cy="180" r="80" fill="#9ca3af"/>
			<rect x="100" y="280" width="200" height="180" fill="#9ca3af"/>
			<text x="200" y="490" font-family="Helvetica" font-size="14" fill="#374151" text-anchor="middle">SAMPLE</text>
		</svg>
	`;
	const buf = await sharp(Buffer.from(svg)).png().toBuffer();
	await writeFile(tmpPath, buf);
	return tmpPath;
}

async function makeSignatureDataUrl(): Promise<string> {
	const svg = `
		<svg width="600" height="120" xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill="#ffffff"/>
			<path d="M 30 70 Q 80 30 130 70 T 250 70 Q 300 90 350 60 T 480 70 Q 530 50 570 80"
			      stroke="#1f2937" stroke-width="2.5" fill="none" stroke-linecap="round"/>
		</svg>
	`;
	const buf = await sharp(Buffer.from(svg)).png().toBuffer();
	return `data:image/png;base64,${buf.toString('base64')}`;
}

function makeSnapshot(overrides: Partial<ApplicationSnapshot> = {}): ApplicationSnapshot {
	return {
		applicationId: 'abc123def456ghi789',
		createdAtMs: Date.now(),
		email: 'sample@example.com',
		firstName: 'JOHN',
		lastName: 'SMITH',
		issueCountry: 'USA',
		dobDay: 15,
		dobMonth: 6,
		dobYear: 1985,
		sex: 'male',
		planYears: 3,
		licenseCategories: ['A', 'B'],
		signatureDataUrl: '', // filled below
		verificationId: 'v-test',
		headshotMeta: {
			path: '', // filled below
			originalName: 'sample.png',
			mimetype: 'image/png',
			size: 1000,
		},
		...overrides,
	};
}

async function renderVariant(label: string, snap: ApplicationSnapshot, debug = false) {
	const svc = new ApplicationsPdfService();
	const buf = await svc.buildPdf(snap, { debug });
	const out = path.join(OUT_DIR, `${label}.pdf`);
	await writeFile(out, buf);
	console.log(`✔ ${label}.pdf (${(buf.length / 1024).toFixed(0)} KB)`);
}

async function main() {
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

	const headshotPath = await makePlaceholderHeadshot();
	const signature = await makeSignatureDataUrl();

	const base = (over: Partial<ApplicationSnapshot>) =>
		makeSnapshot({
			...over,
			signatureDataUrl: signature,
			headshotMeta: {
				path: headshotPath,
				originalName: 'sample.png',
				mimetype: 'image/png',
				size: 1000,
			},
		});

	// Set font path so Unicode works
	process.env.PDF_FONT_PATH = 'assets/fonts/NotoSans-Regular.ttf';

	console.log('Rendering 4 variants to:', OUT_DIR);

	// 1. Baseline — short ASCII name
	await renderVariant('1-short-en', base({}));

	// 2. Long name + long country (overflow test)
	await renderVariant(
		'2-long-en',
		base({
			firstName: 'MAXIMILIAN-ALEXANDER',
			lastName: 'VAN DER ROHE-MARTINEZ',
			issueCountry: 'United States of America',
			licenseCategories: ['A', 'B', 'C', 'D', 'E'],
		}),
	);

	// 3. Cyrillic name (Unicode test)
	await renderVariant(
		'3-cyrillic',
		base({
			firstName: 'АЛЕКСАНДР',
			lastName: 'ВОРОБЬЁВ-ИВАНОВ',
			issueCountry: 'Российская Федерация',
			licenseCategories: ['B'],
		}),
	);

	// 4. Debug — shows anchors + boxes
	await renderVariant('4-debug', base({}), true);

	console.log('\nDone. Open the PDFs in your viewer.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
