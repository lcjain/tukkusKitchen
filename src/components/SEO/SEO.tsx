import { Helmet } from 'react-helmet-async';
import { siteConfig, restaurantSchema } from '@/config/site';
import { getFullUrl, normalizeKeywords } from '@/utils/seo';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  canonical?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export function Seo({
  title,
  description,
  keywords,
  canonical,
  image,
  url,
  type = 'website',
  schema,
}: SeoProps) {
  const pageTitle = title ?? siteConfig.defaultSeo.title;
  const pageDescription = description ?? siteConfig.defaultSeo.description;
  const pageKeywords = normalizeKeywords(keywords ?? siteConfig.defaultSeo.keywords);
  const pageUrl = getFullUrl(url ?? siteConfig.defaultSeo.url);
  const pageCanonical = getFullUrl(canonical ?? siteConfig.defaultSeo.canonical);
  const pageImage = getFullUrl(image ?? siteConfig.defaultSeo.image);

  return (
    <Helmet>
      {/* Primary metadata for search engines */}
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index,follow" />
      <meta name="max-image-preview" content="large" />
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph metadata */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteConfig.openGraphTitle} />
      <meta property="og:description" content={siteConfig.openGraphDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta name="twitter:description" content="Best Vegetarian & Jain Restaurant in Maihar" />
      <meta name="twitter:image" content={pageImage} />

      {/* Browser metadata */}
      <link rel="icon" href={siteConfig.favicon} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={siteConfig.appleTouchIcon} />
      <link rel="manifest" href={siteConfig.manifest} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <meta name="msapplication-TileColor" content={siteConfig.msTileColor} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script type="application/ld+json">
        {JSON.stringify(schema ?? restaurantSchema)}
      </script>
    </Helmet>
  );
}
