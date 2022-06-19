export default {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    key: process.env.NEXT_PUBLIC_SUPABASE_KEY || "",
    secret: process.env.SUPABASE_SIGNING_SECRET || "",
  },
};
