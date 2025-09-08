"use client"

import SessionProvider from '@/providers/AuthProvider';
import UiProvider from '@/providers/UiProvider';
import { CartProvider } from '@helpdice/pro';
// import { CssBaseline } from '@helpdice/theme';

interface Props {
  children: any;
}

export const BaseTemplate: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return (
    <>
      <UiProvider>
      {/* <CssBaseline /> */}
      <SessionProvider>
        <CartProvider>
        {children}
        </CartProvider>
      </SessionProvider>
      </UiProvider>
    </>
  );
};

export default BaseTemplate;

