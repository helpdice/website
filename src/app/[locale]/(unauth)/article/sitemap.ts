import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';
import { Content } from '@helpdice/sdk';
import type { Blog } from '@/types/blog';
import { langUrl } from '@/libs/i18n';
 
// export async function generateSitemaps() {
//   return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
// }
 
export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const start =  id * 50000
  const end = start + 50000
  const blogs = (await Content.articles({
    params: end
  })).data.articles;
  // console.log(blogs);
  const urls = blogs.map((blog: Blog) => ({
    url: `${getBaseUrl()}/article/${blog.category?.slug}/${blog?.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly',
    alternates: {
      languages: langUrl(`${getBaseUrl()}/:lang/article/${blog.category?.slug}/${blog?.slug}`)
    }
  }));
  return [
    ...urls
  ];
}