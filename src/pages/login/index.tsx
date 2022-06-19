import { useEffect } from "react";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { supabase } from "@libs/subabaseClient";

import Brand from "./_brand";
import Worker from "./_worker";

export default function LoginPage() {
  const { asPath, replace } = useRouter();

  useEffect(() => {
    if (asPath === "/login") {
      replace("/");
    }
  }, [asPath, replace]);

  const isBrandSide = asPath.includes("brand");

  return isBrandSide ? <Brand /> : <Worker />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) {
    return { props: {}, redirect: { destination: "/feed", permanent: false } };
  }

  return { props: { user } };
};
