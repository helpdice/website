/* eslint-disable react/no-unescaped-entities */
// import './index.scss';

// import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';
// import QnaBody from './body';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { QNA } from '@/types/qna';
import QNAItem from '@/components/QNA/QNAItem';
import { Content } from '@helpdice/sdk';
import SearchBar from '@/components/SearchBar';
import QNAHeader from './header';

type QNAPaeProps = {
  params: { locale: string, slug: string },
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: QNAPaeProps) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'QNA',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: QNAPaeProps) {
  const { locale } = props.params;
  setRequestLocale(locale);
  const searchParams = await props.searchParams;
  const search = searchParams['search'];
  const category = searchParams['category'];

  const result = await Content.qnas({
    params: {
      search,
      category
    }
  });
  const qnas: QNA[] = result.data.qnas;

  const res = await Content.qnasCategories();
  const categories: any[] = res.data.categories;

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <QNAHeader />
      <br />
      <SearchBar categories={categories} />
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-1 lg:grid-cols-2 xl:gap-8">
          {qnas.map((qna, key) => (
            <QNAItem key={key} qna={qna} />
          ))}
        </div>
      </div>
    </section>
  );
}
