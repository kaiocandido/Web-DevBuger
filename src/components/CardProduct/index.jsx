import PropTypes from "prop-types"
import { CardImg, Container } from "./styles"
import { CartButton } from "../CartButton"
export function CardProduct({ product }) {
    return (
        <Container>
            <CardImg src={product.url} atl={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValeu}</strong>
            </div>
            {<CartButton></CartButton>}
        </Container>
    )
}
CardProduct.propTypes = {
    product: PropTypes.object,
}