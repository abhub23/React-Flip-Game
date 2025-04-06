import { ReactNode, useEffect } from "react"
import { useDarkmode } from "./useDarkmode"

export const DarkmodeProvider = ({children} : { children: React.ReactNode }) => {

    const initializeTheme = (useDarkmode((state) => state.initializeTheme))

    useEffect(() => {
        initializeTheme()
    },[initializeTheme])

    return (
        <>
        {children}
        </>
    )
}