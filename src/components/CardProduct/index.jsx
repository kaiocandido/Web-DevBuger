import PropTypes from "prop-types"
import { CardImg, Container } from "./styles"
import { CartButton } from "../CartButton"
import { useCart } from "../../hooks/CartContext"
export function CardProduct({ product }) {
    const { putProductInCart } = useCart()
    return (
        <Container>
            <CardImg src={product.url} atl={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValeu}</strong>
            </div>

            <CartButton
                onClick={(e) => {
                    e.preventDefault()
                    putProductInCart(product)
                    alert(`${product.name} adicionado ao carrinho!`)
                }}
            >
            </CartButton>
            {<CartButton onClick={() => putProductInCart(product)}></CartButton>}
        </Container>
    )
}
CardProduct.propTypes = {
    product: PropTypes.object,
}