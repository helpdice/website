"use client"
import { ThemeProvider } from "next-themes";

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient;