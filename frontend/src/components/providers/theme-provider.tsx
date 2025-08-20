"use client"

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"
 
export const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps & { children: React.ReactNode }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}