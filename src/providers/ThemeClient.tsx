"use client"
import { ThemeProvider } from "next-themes";

const ThemeClient = ({ children }) => {
    return (
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient;