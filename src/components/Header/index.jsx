import { Container, HeaderLink, Navigation, Options, Profile, Logout, ContainerLink, Content } from "./styles";
import { UserCircleCheck, Basket, SignOut } from "@phosphor-icons/react"
import { useNavigate, useResolvedPath } from "react-router-dom";

export function Header() {
    const navigate = useNavigate()
    const { pathname } = useResolvedPath()

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to={"/"} $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to={"/cardapio"} $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                        <hr />
                        <HeaderLink to={"/sobre"} $isActive={pathname === '/sobre'}>
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