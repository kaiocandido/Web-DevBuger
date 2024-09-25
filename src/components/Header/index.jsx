import { Container, HeaderLink, Navigation, Options, Profile, Logout, ContainerLink, Content } from "./styles";
import { UserCircleCheck, Basket } from "@phosphor-icons/react"

export function Header() {
    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>
                            Home
                        </HeaderLink>
                        <HeaderLink>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <div>
                            <UserCircleCheck color="#FF441F" size={24} />
                            <p> Olá, <span> Kaio </span></p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <ContainerLink>
                        <HeaderLink>
                            <Basket color="#FF441F" size={24} />
                            Carrinho
                        </HeaderLink>
                    </ContainerLink>
                </Options>
            </Content>
        </Container>
    )
}