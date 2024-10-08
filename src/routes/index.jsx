import { createBrowserRouter } from "react-router-dom"
<<<<<<< HEAD
import { Login, Home, Register, Menu, About, Cart } from "../containers"
import { Header, Footer } from "../components"
=======
import { Login } from "../containers/Login"
import { Register } from "../containers/Register"
import { Home } from "../containers/Home"
import { Menu } from "../containers/Menu"
import { Header } from "../components/Header"
import { About } from "../containers/About"
import { Footer } from "../components/Footer"
import { Cart } from "../containers/Cart"
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/',
        element: (
            <>
                <Header />,
                <Home />,
                <Footer />,
            </>
        ),
    },
    {
        path: '/cardapio',
        element: <>
            <Header />,
            <Menu />,
            <Footer />,
        </>
    },
    {
        path: '/sobre',
        element: <>
            <Header />
            <About />,
            <Footer />,
        </>
    },
    {
        path: '/carrinho',
        element: <Cart />
    },

])