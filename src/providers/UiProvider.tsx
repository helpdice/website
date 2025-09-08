"use client"
import { UiProvider as ThemeProvider } from "@helpdice/theme";

const UiProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default UiProvider;