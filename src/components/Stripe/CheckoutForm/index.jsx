import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom"
import '../styles.css'
import { useCart } from "../../../hooks/CartContext"
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const { state: { dpmCheckerLink } } = useLocation()
    const { cartProducts, clearCart } = useCart()
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            console.error("Stripe with error")
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error) {
            setMessage(error.message);
            toast.error(error.message)
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            try {
                const products = cartProducts.map((product) => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                        price: product.price,
                    };
                });

                const { status } = await api.post("/orders",
                    { products },
                    {
                        validateStatus: () => true,
                    });

                if (status === 200 || status === 201) {
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,)
                        clearCart()
                    }, 2000);
                    clearCart()
                    toast.success("Pedido realizado com sucesso");
                } else if (status === 400 || status === 409) {
                    toast.error("Falha ao realizar pedido");
                } else {
                    throw new Error("Erro inesperado");
                }
            } catch (error) {
                toast.error("Falha no sistema! Tente novamente!");
            }
        } else {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,)
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            {/* [DEV]: Display dynamic payment methods annotation and integration checker */}
            <div id="dpm-annotation">
                <p>
                    Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
                    <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker" className="link">Preview payment methods by transaction</a>
                </p>
            </div>
        </div>
    );
}