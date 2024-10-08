import { Banner, Container, Content, Main } from "./styles"
import { CategoriesCarousel } from "../../components"

export function Home() {
    return (
        <Main>
            <Banner>
                <h1>SEJA BEM-VINDO(A)!!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                </Content>
            </Container>
        </Main>
    )
}

