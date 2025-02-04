"use client"
import { UiProvider as ThemeProvider } from "@helpdice/ui";

const UiProvider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default UiProvider;