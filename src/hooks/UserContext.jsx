import { useContext, useState, useEffect, createContext } from "react";

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState()
    const putUserData = (userInfo) => {
        setUserInfo(userInfo)
        localStorage.setItem("devbusguer:userData", JSON.stringify(userInfo))
    }

    return (
        <UserContext.Provider value={{ userInfo, putUserData }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("User must be a valid context")
    }

    return context
}
