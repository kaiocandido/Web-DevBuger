import { Button } from "../Button";
import { Container } from "./styles"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api"
import { FormatPrice } from "../../Utils/FormatPrice";
import { useNavigate } from "react-router-dom";

export function CartResume() {
    const navigate = useNavigate()
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(500)
    const { cartProducts, clearCart } = useCart()

    useEffect(() => {

        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            };
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products });
            navigate('/checkout', {
                state: data,
            });
            console.log(data);
        } catch (err) {
            toast.error("Erro, tente novamente", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo Do Pedido</h2>
                    <p className="itens">Itens</p>
                    <p className="itens-price">{FormatPrice(finalPrice)}</p>
                    <p className="delivery-text">Taxa De Entrega</p>
                    <p className="delivery-text-price">{FormatPrice(deliveryTax)}</p>
                </div>

                <div className="container-bottom">
                    <p>Total</p>
                    <p>{FormatPrice(finalPrice + deliveryTax)}</p>
                </div>

            </Container>
            <Button onClick={submitOrder}>Finalizar pedido</Button>
        </div>
    )
}