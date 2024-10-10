import { useLocation } from "react-router-dom"

export function Checkout() {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}