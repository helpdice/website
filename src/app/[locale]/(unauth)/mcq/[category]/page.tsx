import { getTranslations } from 'next-intl/server';
import McqItem from '@/components/MCQ/McqItem';
import type { MCQ } from '@/types/mcq';
import { Content } from '@helpdice/sdk';
import SearchBar from '@/components/SearchBar';
import MCQHeader from '../header';
import { permanentRedirect, RedirectType } from 'next/navigation';

type MCQPageProps = {
  params: Promise<{ locale: string, category: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: MCQPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'MCQ',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
  };
}

export default async function MCQCategoryPage(props: MCQPageProps) {
  const { category, locale } = await props.params;
  const searchParams = await props.searchParams;
  const search = searchParams['search'];
  const _mcq = (await Content.mcq(category)).data.mcq;
  if (_mcq) {
    permanentRedirect(`/mcq/${_mcq.category.slug}/${_mcq.slug}`, RedirectType.replace);
  }
  let mcqs: MCQ[] = [];
  try {
    mcqs = (await Content.mcqs({
      params: {
        category: category,
        search: search
      }
    })).data.mcqs;
  } catch (err) {
    console.log(err);
  }
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <MCQHeader />
      <br />
      <br />
      <SearchBar categories={[]} />
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-1 lg:grid-cols-2 xl:gap-8">
          {mcqs.map((post, key) => (
            <McqItem key={key} blog={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
