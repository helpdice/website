import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';
import { Content } from '@helpdice/sdk';
import type { Blog } from '@/types/blog';
import { langUrl } from '@/libs/i18n';
 
export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}
 
export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = getBaseUrl();
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000
  const end = start + 50000
  const mcqs = (await Content.allMcqs({
    params: {
      end
    }
  })).data.mcqs;
  // console.log(mcqs);
  const urls = mcqs.map((mcq: Blog) => ({
    url: `${getBaseUrl()}/mcq/${mcq.category?.slug}/${mcq?.slug}`,
    lastModified: mcq.updatedAt,
    changeFrequency: 'yearly',
    alternates: {
      languages: langUrl(`${BASE_URL}/:lang/mcq/${mcq.category?.slug}/${mcq?.slug}`)
    },
  }));
  return [
    ...urls
  ];
}