import { Banner, Container, Content } from "./styles"
import { CategoriesCarousel } from "../../components/CategoriesCarousel"

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Seja Bem-Vindo(a)</h1>
            </Banner>

            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div>Produtos</div>
                </Content>
            </Container>

        </main>
    )
}

