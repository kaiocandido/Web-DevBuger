import { Container, HeaderLink, Navigation, Options, Profile, Logout, ContainerLink, Content } from "./styles";
import { UserCircleCheck, Basket, SignOut } from "@phosphor-icons/react"

export function Header() {
    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink>
                            Cardápio
                        </HeaderLink>
                        <hr />
                        <HeaderLink>
                            Categorias
                        </HeaderLink>
                        <hr />
                        <HeaderLink>
                            Sobre
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <div>
                            <UserCircleCheck color="#fff" size={24} />
                            <p> Olá, <span> Kaio </span></p>
                        </div>
                        <hr />
                        <Logout><SignOut color="#fff" size={24} /></Logout>
                    </Profile>
                    <ContainerLink>
                        <HeaderLink>
                            <hr />
                            <Basket color="#fff" size={24} />
                            Carrinho
                        </HeaderLink>
                    </ContainerLink>
                </Options>
            </Content>
        </Container>
    )
}