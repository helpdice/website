import Signin from '@/components/Auth/Signin';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type LoginPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: LoginPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = async (props: LoginPageProps) => {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return <Signin />;
};

export default SignInPage;
