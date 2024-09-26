import imageAbout from "../../assets/pexels-paul-voie-2523376.jpg"
import imageAboutTwo from "../../assets/pexels-allanfranca-3465604.jpg"
import imageAboutThree from "../../assets/pexels-fotios-photos-1024359.jpg"
import imageAboutFour from "../../assets/hamburger-4955630_1920.png"
import { Container, ContainerImg, ContainerMedium, ContainerAbout, ContainerAboutTwo, ContainerAboutThree, ContainerAboutText, ContainerMap } from "./styles"
import MapEmbed from "../../components/Maps"

export function About() {
    return (
        <Container>
            <ContainerMedium>
                <div>
                    <h1>Sobre Nós !!</h1>
                </div>
                <ContainerImg>
                    <img src={imageAbout} />
                    <img src={imageAboutTwo} />
                    <img src={imageAboutThree} />
                    <img src={imageAboutFour} />
                </ContainerImg>
                <ContainerAboutText>
                    <ContainerAbout>
                        <p>Fundada em 2024, a News Burguer nasceu do amor pela boa comida
                            e pela vontade de proporcionar momentos especiais aos nossos clientes. Cada hambúrguer
                            é feito com carinho, utilizando carnes suculentas, pães artesanais e ingredientes locais,
                            cuidadosamente selecionados. Acreditamos que cada mordida deve ser uma explosão de sabor!</p>
                    </ContainerAbout>
                    <ContainerAboutTwo>
                        <p>Nosso espaço foi pensado para ser acolhedor e convidativo, perfeito para uma refeição rápida ou um encontro com amigos e familiares.
                            Venha desfrutar de um ambiente descontraído, com música boa e um atendimento que faz você se sentir em casa.</p>
                    </ContainerAboutTwo>
                    <ContainerAboutThree>
                        <p>Se você é um amante de hambúrgueres ou está apenas em busca de uma refeição deliciosa, convidamos você a visitar a News Burguer. Venha experimentar nossos clássicos, além das criações exclusivas que só encontramos aqui!</p>
                    </ContainerAboutThree>
                </ContainerAboutText>
                <ContainerMap>
                    <h1>Nossa Localização</h1>
                    <MapEmbed />
                </ContainerMap>
            </ContainerMedium>

        </Container>
    )
}