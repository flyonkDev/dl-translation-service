import type { CreateApplicationDto } from '../applications/dto/create-application.dto';

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function buildThankYouEmail(input: {
  customerEmail: string;
  applicationId: string;
  dto: Pick<CreateApplicationDto, 'firstName' | 'lastName' | 'planYears' | 'issueCountry'>;
  brand?: {
    logoUrl?: string;
    logoDataUri?: string;
    productUrl?: string;
  };
}) {
  const name = `${input.dto.firstName} ${input.dto.lastName}`.trim();
  const safeName = escapeHtml(name);
  const safeAppId = escapeHtml(input.applicationId);
  const plan = `${input.dto.planYears}-year plan`;
  const safePlan = escapeHtml(plan);
  const safeIssueCountry = escapeHtml(input.dto.issueCountry);

  const subject = 'Your IDP Companion document is ready';
  const text =
    `Hi ${name},\n\n` +
    `Your IDP Companion document is ready to download.\n\n` +
    `This is your International Driving Permit equivalent — a multilingual document that works alongside your driver's license. Use it to rent cars, cross borders, and handle road situations anywhere in the world.\n\n` +
    `The PDF is attached. \n\n` +
    `Safe travels,\n` +
    `IDP Companion Team\n` +
    `idpcompanion.com\n`;

  const logoUrl = input.brand?.logoUrl?.trim();
  const logoDataUri = input.brand?.logoDataUri?.trim();
  const productUrl = input.brand?.productUrl?.trim() ?? 'https://idpcompanion.com';

  const logoSrc = logoUrl || logoDataUri;
  const safeLogoSrc = logoSrc ? escapeHtml(logoSrc) : '';
  const safeProductUrl = escapeHtml(productUrl);

  const logoImg = logoSrc
    ? `<img src="${safeLogoSrc}" alt="IDP Companion" height="28" style="display:block; height:28px; width:auto;" />`
    : '';

  const logoHtml = logoImg
    ? `<div style="margin: 18px 0 8px;">${logoImg}</div>`
    : '';

  const html = `
<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; line-height: 1.5; color: #0f172a;">
  <h2 style="margin: 0 0 12px; font-size: 18px;">Hi ${safeName},</h2>
  <p style="margin: 0 0 12px;">Your IDP Companion document is ready to download.</p>
  <p style="margin: 0 0 12px;">
    This is your International Driving Permit equivalent — a multilingual document that works alongside your driver's license.
    Use it to rent cars, cross borders, and handle road situations anywhere in the world.
  </p>
  <div style="margin: 16px 0; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc;">
    <div style="margin: 0 0 6px;"><strong>Application ID:</strong> <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${safeAppId}</span></div>
    <div style="margin: 0 0 6px;"><strong>Plan:</strong> ${safePlan}</div>
    <div style="margin: 0;"><strong>License country:</strong> ${safeIssueCountry}</div>
  </div>
  <p style="margin: 0 0 12px;"><strong>The PDF is attached.</strong> You can also access it anytime from your account.</p>
  <p style="margin: 0 0 12px;">Safe travels,</p>
  ${logoHtml}
  <p style="margin: 0; font-weight: 700;">IDP Companion Team</p>
  <p style="margin: 4px 0 0; font-size: 12px; color: #64748b;">
    IDP Companion is a driver license companion document for smoother travel.
    <a href="${safeProductUrl}" style="color:#0f172a; text-decoration: underline;">${safeProductUrl}</a>
  </p>
</div>
`.trim();

  return { subject, html, text };
}

