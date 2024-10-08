import { createBrowserRouter } from "react-router-dom"
import { Login, Home, Register, Menu, About, Cart } from "../containers"
import { Header, Footer } from "../components"

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