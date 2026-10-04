/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "PT Digitas Solusi Indonesia";
const DEFAULT_SITE_TAGLINE = "Design & engineering partner for scale-ups and enterprise products";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	return {
		siteTitle: settings?.title ?? DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline ?? DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url
			? settings.logo
			: {
					mediaId: "digitas-brand-logo",
					url: "/logo-digitas-dark.png",
					alt: "PT Digitas Solusi Indonesia",
				},
	};
}
