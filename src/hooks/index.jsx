import { UserProvider } from "./UserContext"
import { CartProvaider } from "./CartContext"

const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvaider>
                {children}
            </CartProvaider>
        </UserProvider>
    )
}

export default AppProvider