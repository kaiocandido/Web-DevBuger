import { Container, HeaderLink, Navigation, Options, Profile, Logout, ContainerLink, Content, HeaderLinkCar } from "./styles";
import { UserCircleCheck, Basket, SignOut } from "@phosphor-icons/react"
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx";

export function Header() {
    const navigate = useNavigate()
    const { pathname } = useResolvedPath()
    const { logout, userInfo } = useUser()
    function logoutUser() {
        logout()
        navigate("/login")
    }

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
                            <p> Olá, <span> {userInfo.name} </span></p>
                        </div>
                        <hr />
                        <Logout onClick={logoutUser}><SignOut color="#fff" size={24} /></Logout>
                    </Profile>
                    <ContainerLink>
                        <HeaderLinkCar to={"/carrinho"}>
                            <hr />
                            <Basket to={"/carrinho"} color="#fff" size={24} />
                            Carrinho
                        </HeaderLinkCar>
                    </ContainerLink>
                </Options>
            </Content>
        </Container>
    )
}