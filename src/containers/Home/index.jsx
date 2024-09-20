import { Banner, Container, Content, Main } from "./styles"
import { CategoriesCarousel } from "../../components/CategoriesCarousel"

export function Home() {
    return (
        <Main>
            <Banner>
                <h1>Seja Bem-Vindo(a)</h1>
            </Banner>

            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div>Produtos</div>
                </Content>
            </Container>

        </Main>
    )
}

