import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import type { AppProps } from "next/app";

import { AuthProvider } from "@hooks/auth";
import { supabase } from "@libs/subabaseClient";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <AuthProvider supabase={supabase}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
