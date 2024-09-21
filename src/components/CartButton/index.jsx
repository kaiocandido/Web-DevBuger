import CartImg from "../../assets/Vector.svg"
import { ContainerButton } from "./styles"

export function CartButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={CartImg} alt="Carrinho de compras" />
        </ContainerButton>
    )
}