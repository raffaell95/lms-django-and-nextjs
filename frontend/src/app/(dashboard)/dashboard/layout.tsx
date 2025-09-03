import { AuthMiddleware } from "@/components/middlewares/auth-mddleware";


export default async function ({ children }: { children: React.ReactNode }) {
  return <AuthMiddleware>{children}</AuthMiddleware>
}