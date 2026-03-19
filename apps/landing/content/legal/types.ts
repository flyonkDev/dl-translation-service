/** Paths for NuxtLink + useLocalePath (prefix_except_default). */
export type LegalInternalPath = '/refund-policy' | '/privacy-policy';

export type LegalLinkBullet = {
	kind: 'link';
	before: string;
	path: LegalInternalPath;
	linkLabelKey: 'legal.linkRefundPolicy' | 'legal.linkPrivacyPolicy';
	after: string;
};

export type LegalBullet = string | LegalLinkBullet;

export type LegalClosingLink = {
	before: string;
	path: LegalInternalPath;
	linkLabelKey: 'legal.linkRefundPolicy' | 'legal.linkPrivacyPolicy';
	after: string;
};

export type LegalSection = {
	id?: string;
	heading?: string;
	notice?: { labelKey: 'legal.privacyNoticeLabel'; body: string };
	paragraphs?: string[];
	listIntro?: string;
	bullets?: LegalBullet[];
	closingWithLink?: LegalClosingLink;
	trailingParagraphs?: string[];
	addressLines?: string[];
	/** Renders: t(beforeKey) + mailto + t(afterKey) */
	contactWithEmail?: { beforeKey: string; afterKey: string };
};

export type LegalDoc = {
	updated: string;
	sections: LegalSection[];
};
