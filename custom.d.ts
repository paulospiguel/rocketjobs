declare global {
  declare module "next/server" {
    interface NextRequest {
      user: any;
    }
  }
}
