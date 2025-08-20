import { NoAuthMiddleware } from "@/components/middlewares/noauth-mddleware";
import React from "react";

export default async function ({children}: {children: React.ReactNode}){
    return <NoAuthMiddleware>{children}</NoAuthMiddleware>
}