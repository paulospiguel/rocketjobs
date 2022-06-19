import config from "@config/index";

const supabaseUrl = config.supabase.url as string;
const supabaseKey = config.supabase.key as string;

export async function getUser(req: any): Promise<any> {
  let token = req.cookies["sb-access-token"];
  if (!token) {
    return {
      user: null,
      data: null,
      error: "There is no supabase token in request cookies",
    };
  }
  let authRequestResult = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      APIKey: supabaseKey,
    },
  });

  let result = await authRequestResult.json();
  //console.log("Supabase auth result", result);
  if (authRequestResult.status != 200) {
    return {
      user: null,
      data: null,
      error: `Supabase auth returned ${authRequestResult.status}. See logs for details`,
    };
  } else if (result.aud === "authenticated") {
    return {
      user: result,
      data: result,
      error: null,
    };
  }
}
