'use client'

import { queryClient } from "@/lib-example/query-client"
import {QueryClientProvider} from '@tanstack/react-query'

export const QueryProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>{children }</QueryClientProvider>
    )
}