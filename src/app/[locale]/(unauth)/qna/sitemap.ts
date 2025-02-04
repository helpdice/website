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
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000
  const end = start + 50000
  const qnas = (await Content.qnas({
    params: {
      end
    }
  })).data.qnas;
  const urls = qnas.map((qna: Blog) => ({
    url: `${getBaseUrl}/qna/${qna.category.slug}/${qna.slug}`,
    changeFrequency: 'yearly',
    lastModified: qna.updatedAt,
    alternates: {
          languages: langUrl(`${getBaseUrl()}/:lang/qna/${qna.category.slug}/${qna.slug}`)
    },
  }));
  return [
    ...urls
  ];
}