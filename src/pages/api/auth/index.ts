import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@libs/subabaseClient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);
}
