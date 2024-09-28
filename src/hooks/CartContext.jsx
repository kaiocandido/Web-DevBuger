import { useContext, useState, useEffect, createContext } from "react";

const CartContext = createContext({})

export const CartProvaider = ({ children }) => {
    const [CartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = CartProducts.findIndex((prd) => prd.id == product.id)
        let newProductsIncart = []
        if (cartIndex >= 0) {
            newProductsIncart = CartProducts
            newProductsIncart[cartIndex].quantity = newProductsIncart[cartIndex].quantity + 1
            setCartProducts(newProductsIncart)
        } else {
            product.quantity = 1
            newProductsIncart = [...CartProducts, product]
            setCartProducts(newProductsIncart)
            updateLocalStorage(newProductsIncart)
        }
    }

    const updateLocalStorage = () => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(product))
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem("devburguer:cartInfo")

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData))
        }

    }, [])

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
    )

}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("Error")
    }
    return context
}