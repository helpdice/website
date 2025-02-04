import type { MetadataRoute } from 'next';
import { URLS } from '@/utils/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return URLS
}

