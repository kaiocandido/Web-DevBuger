import { Banner, Container, Content, Main } from "./styles"
import { CategoriesCarousel } from "../../components/CategoriesCarousel"
import { OffersCarousel } from "../../components/OffersCarousel"

export function Home() {
    return (
        <Main>
            <Banner>
            </Banner>

            <Container>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </Content>
            </Container>

        </Main>
    )
}

