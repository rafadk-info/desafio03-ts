import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    name: string,
    email: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    setUserData: (name: string, email: string) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ name, setName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')

    useEffect(() => {
        const storage = getAllLocalStorage()
        if(storage){
            const parsed = JSON.parse(storage)
            setIsLoggedIn(parsed.login)
            if(parsed.name) setName(parsed.name)
            if(parsed.email) setEmail(parsed.email)
        }
    }, [])

    const setUserData = (userName: string, userEmail: string) => {
        setName(userName)
        setEmail(userEmail)
    }

    return (
      <AppContext.Provider value={{ name, email, isLoggedIn, setIsLoggedIn, setUserData }}>
        { children }
      </AppContext.Provider>
    )
}
