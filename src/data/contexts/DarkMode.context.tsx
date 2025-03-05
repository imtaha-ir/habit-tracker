import { GlobalStyles } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

export type DarkModeContextType = {
    darkMode: boolean;
    setDarkMode: any;
}
export const DarkModeContext = createContext<DarkModeContextType>({ darkMode: false, setDarkMode: () => { } })

interface DarkModeProviderProps {
    children: ReactNode
}

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [darkModeState, setDarkModeState] = useState(false)
    const handleChangeDarkMode = (mode: boolean) => {
        setDarkModeState(mode)
        const modeStr = mode ? "dark" : "light"
        localStorage.setItem("darkMode", modeStr)
    }
    useEffect(() => {
        const modeStr = localStorage.getItem("darkMode")
        const mode = (modeStr == "dark")
        handleChangeDarkMode(mode)
    }, [])

    return <DarkModeContext.Provider value={{ darkMode: darkModeState, setDarkMode: handleChangeDarkMode }}>
        <GlobalStyles styles={{ body: { backgroundColor: darkModeState ? "#444" : undefined } }} />
        {children}
    </DarkModeContext.Provider>
}