import { createContext, ReactNode, useState } from "react";

export const DarkModeContext = createContext<boolean>(false)

interface DarkModeProviderProps {
    children: ReactNode
}

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [darkMode,setDarkMode]=useState(false)
    return <DarkModeContext.Provider value={darkMode}>
        {children}
    </DarkModeContext.Provider>
}