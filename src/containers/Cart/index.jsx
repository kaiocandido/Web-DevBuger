import { CartItems, CartResume } from "../../components"
import { Banner, Container, Content, Title } from "./styles"

export function Cart() {
    return (
        <Container>
            <Banner>
                <p>NEWS BURGUER</p>
            </Banner>
            <Title>
                Pedido
            </Title>
            <Content>
                <CartItems></CartItems>
                <CartResume></CartResume>
            </Content>
        </Container>
    )
}