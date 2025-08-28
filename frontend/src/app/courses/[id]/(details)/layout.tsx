import { AuthMiddleware } from "@/components/middlewares/auth-mddleware";
import React from "react";

export default async function ({children}: {children: React.ReactNode}){
    return <AuthMiddleware>{children}</AuthMiddleware>
}