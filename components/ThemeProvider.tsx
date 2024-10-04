'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function Theme({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" enableSystem={false}>
      {children}
    </NextThemeProvider>
  )
}

export { useTheme } from 'next-themes'