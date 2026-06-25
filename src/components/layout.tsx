"use client";

import { ThemeProvider } from "@/providers/theme-context";

export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
