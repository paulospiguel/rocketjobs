import { supabase } from "@libs/subabaseClient";

export type Provider = "google" | "facebook" | "linkedin";

export async function signOut(redirect: (params: any) => void) {
  try {
    await supabase.auth.signOut();

    fetch("/api/auth/logout", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
    }).then((res) => res.json());

    redirect("/");
  } catch (error) {
    console.log(error);
  }
}

export const handleOAuthSignIn = async (
  provider: Provider,
  redirectTo?: string
) => {
  const { error } = await supabase.auth.signIn({ provider }, { redirectTo });

  console.log({ error });
};
