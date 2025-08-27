import { auth } from "@/lib-example/auth";
import { redirect } from "next/navigation";

type Props = {
    children: React.ReactNode;
}

export const NoAuthMiddleware = async ({ children }: Props) => {
    const session = await auth()

    if (session?.user?.access_token) {
        redirect("/dashboard")
    }

    return children
}