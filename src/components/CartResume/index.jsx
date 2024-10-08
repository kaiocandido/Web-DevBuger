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
            };
        });

        try {
            const { status } = await api.post("/orders",
                { products },
                {
                    validateStatus: () => true,
                });

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate("/");
                    clearCart()
                }, 2000);
                toast.success("Pedido realizado com sucesso");
            } else if (status === 400 || status === 409) {
                toast.error("Falha ao realizar pedido");
            } else {
                throw new Error("Erro inesperado");
            }
        } catch (error) {
            toast.error("Falha no sistema! Tente novamente!");
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