import { siteConfig } from '@/config/site';

export function getFullUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function normalizeKeywords(keywords: string[] | string): string {
  return Array.isArray(keywords) ? keywords.join(', ') : keywords;
}
