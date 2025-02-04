export default function AuthLayout(props: {
  children: React.ReactNode;
  // params: { locale: string };
}) {
  // let clerkLocale = enUS;
  // let signInUrl = '/sign-in';
  // let signUpUrl = '/sign-up';
  // let dashboardUrl = '/dashboard';

  // if (props.params.locale === 'fr') {
  //   clerkLocale = frFR;
  // }

  // if (props.params.locale !== 'en') {
  //   signInUrl = `/${props.params.locale}${signInUrl}`;
  //   signUpUrl = `/${props.params.locale}${signUpUrl}`;
  //   dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  // }

  return <>{props.children}</>;
}
