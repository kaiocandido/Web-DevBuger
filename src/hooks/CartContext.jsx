import { useContext, useState, useEffect, createContext } from "react";

const CartContext = createContext({})

export const CartProvaider = ({ children }) => {
<<<<<<< HEAD
    const [cartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id == product.id)
        let newProductsIncart = []
        if (cartIndex >= 0) {
            newProductsIncart = cartProducts
=======
    const [CartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = CartProducts.findIndex((prd) => prd.id == product.id)
        let newProductsIncart = []
        if (cartIndex >= 0) {
            newProductsIncart = CartProducts
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142
            newProductsIncart[cartIndex].quantity = newProductsIncart[cartIndex].quantity + 1
            setCartProducts(newProductsIncart)
        } else {
            product.quantity = 1
<<<<<<< HEAD
            newProductsIncart = [...cartProducts, product]
=======
            newProductsIncart = [...CartProducts, product]
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142
            setCartProducts(newProductsIncart)
            updateLocalStorage(newProductsIncart)
        }
    }

<<<<<<< HEAD
    const clearCart = (product) => {
        setCartProducts([])
        updateLocalStorage([])
    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId)
        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const inCreaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })
        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const deCreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id == productId)
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            })
            setCartProducts(newCart)
            updateLocalStorage(newCart)
        } else {
            deleteProduct(productId)
        }
    }

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products))
=======
    const updateLocalStorage = () => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(product))
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem("devburguer:cartInfo")

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
        }

    }, [])

<<<<<<< HEAD
    return (<CartContext.Provider value={{ putProductInCart, clearCart, deleteProduct, inCreaseProduct, deCreaseProduct, cartProducts }}>{children}</CartContext.Provider>
=======
    const clearCart = (product) => { }

    const deleteProduct = (productId) => {
        const newCart = CartProducts.filter((prd) => prd.id !== productId)
        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const inCreaseProduct = (productId) => {
        const newCart = CartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        })
        setCartProducts(newCart)
        updateLocalStorage(newCart)
    }

    const deCreaseProduct = (productId) => {
        const cartIndex = CartProducts.findIndex((prd) => prd.id == productId)
        if (CartProducts[cartIndex].quantity > 1) {
            const newCart = CartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            })
            setCartProducts(newCart)
            updateLocalStorage(newCart)
        } else {
            deleteProduct(productId)
        }
    }

    return (<CartContext.Provider value={{ putProductInCart, clearCart, deleteProduct, inCreaseProduct, deCreaseProduct, CartProducts }}>{children}</CartContext.Provider>
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142
    )

}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("Error")
    }
    return context
}