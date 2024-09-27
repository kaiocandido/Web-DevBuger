import { createBrowserRouter } from "react-router-dom"
import { Login } from "../containers/Login"
import { Register } from "../containers/Register"
import { Home } from "../containers/Home"
import { Menu } from "../containers/Menu"
import { Header } from "../components/Header"
import { About } from "../containers/About"
import { Footer } from "../components/Footer"

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

])