import Placeholder from '@/components/Placeholder';
import { getTranslations } from 'next-intl/server';
import OrderBody from './body';
import { Accounting } from '@helpdice/sdk';
import { cookies } from 'next/headers'

// import { Hello } from '@/components/Hello';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Order',
  });

  return {
    title: t('meta_title'),
  };
}

const History = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get('ACID');
  // console.log(token);
  let orders = [];
  try {
    const res = await Accounting.invoices({
      headers: {
        'Authorization': `Bearer ${token ? token.value : ''}`
      }
    });
    console.log('Orders :', res);
  } catch (err) {
    console.log(err);
  }
  return (
  <div className="py-20 lg:py-25 lg:px-10 xl:py-30 xl:px-20">
    <OrderBody />
  </div>
  );
}

export default History;