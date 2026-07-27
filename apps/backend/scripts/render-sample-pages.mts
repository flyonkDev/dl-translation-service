/**
 * Render watermarked sample PDF pages as PNGs for /sample-pdf/ landing page.
 * Uses mupdf for high-fidelity PDF → PNG, then sharp for watermark overlay.
 *
 * Run: npx tsx scripts/render-sample-pages.mts
 * Output: apps/landing/public/sample/sample-{cover,back,lang-1,lang-2}.png
 * (lang-1 = EN category descriptions p.3, lang-2 = Arabic p.4)
 */
import * as mupdf from 'mupdf';
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SAMPLE_PDF = path.resolve(__dirname, 'preview-output/1-short-en.pdf');
const OUT_DIR = path.resolve(__dirname, '../../../apps/landing/public/sample');
const DPI = 200;

async function renderPage(doc: mupdf.Document, pageNum: number): Promise<Buffer> {
	const page = doc.loadPage(pageNum);
	const bounds = page.getBounds();
	const w = bounds[2] - bounds[0];
	const h = bounds[3] - bounds[1];

	const scale = DPI / 72;
	const pixmap = page.toPixmap(
		mupdf.Matrix.scale(scale, scale),
		mupdf.ColorSpace.DeviceRGB,
		false,
		true,
	);

	const pngBuf = pixmap.asPNG();
	return Buffer.from(pngBuf);
}

async function addWatermark(imgBuf: Buffer, text: string): Promise<Buffer> {
	const meta = await sharp(imgBuf).metadata();
	const w = meta.width!;
	const h = meta.height!;

	const fontSize = Math.round(w * 0.07);
	const svg = `
		<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="wm" patternUnits="userSpaceOnUse" width="${w}" height="${h}">
					<text x="50%" y="30%" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}"
						fill="rgba(200,200,200,0.35)" text-anchor="middle" transform="rotate(-35, ${w / 2}, ${h * 0.3})"
						font-weight="bold">${text}</text>
					<text x="50%" y="70%" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}"
						fill="rgba(200,200,200,0.35)" text-anchor="middle" transform="rotate(-35, ${w / 2}, ${h * 0.7})"
						font-weight="bold">${text}</text>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#wm)"/>
		</svg>
	`;

	return sharp(imgBuf)
		.composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
		// 874px wide matches the <img> width/height attrs on sample-pdf.vue;
		// palette PNG keeps near-monochrome pages small (CWV)
		.resize({ width: 874 })
		.png({ palette: true, quality: 90, compressionLevel: 9 })
		.toBuffer();
}

async function main() {
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

	const pdfBuf = await readFile(SAMPLE_PDF);
	const doc = mupdf.Document.openDocument(pdfBuf, 'application/pdf');
	const pageCount = doc.countPages();
	console.log(`PDF has ${pageCount} pages, rendering at ${DPI} DPI`);

	const pages: Array<{ pageNum: number; file: string }> = [
		{ pageNum: 0, file: 'sample-cover.png' },
		{ pageNum: 1, file: 'sample-back.png' },
		{ pageNum: 2, file: 'sample-lang-1.png' },
		{ pageNum: 3, file: 'sample-lang-2.png' },
	];

	for (const { pageNum, file } of pages) {
		const raw = await renderPage(doc, pageNum);
		const withWm = await addWatermark(raw, 'SAMPLE — idpcompanion.com');
		await writeFile(path.join(OUT_DIR, file), withWm);
		console.log(`✔ ${file} (${(withWm.length / 1024).toFixed(0)} KB)`);
	}
	console.log(`Output: ${OUT_DIR}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
