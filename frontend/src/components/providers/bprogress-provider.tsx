'use client'

import { ProgressProvider } from "@bprogress/next/app"
import { JSX } from "react"

export const BProgressProvider = ({children}: {children: JSX.Element}) => {
    return <ProgressProvider height="4px" color="#1c6bfd">{children}</ProgressProvider>
}