import { useLocation } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import stripePromise from '../../config/stripeConfig'
import CheckoutForm from '../../components/Stripe/CheckoutForm/'

export function Checkout() {
    const { state } = useLocation()
    const clientSecret = state?.clientSecret

    if (!clientSecret) {
        return <div>Error!! Tente novamente</div>
    }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    )
}
