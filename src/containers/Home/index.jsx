import { Banner, Container, Content, Main } from "./styles"
import { CategoriesCarousel } from "../../components/CategoriesCarousel"
import { OffersCarousel } from "../../components/OffersCarousel"

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

