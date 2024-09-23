import styled from "styled-components";
import BackgroundImg from "../../assets/view-delicious-fantasy-surreal-street-food.jpg";

export const Main = styled.main`
    background-color: black;
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Para evitar overflow em dispositivos pequenos */
`
export const Banner = styled.div`
    background: url('${BackgroundImg}');
    text-align: center;
    background-size: cover;
    background-position: center;
    height: 300px;
    border-radius: 10px;
    position: relative; /* Para o posicionamento do h1 */
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 5vw; /* Usando viewport width para responsividade */
        font-weight: bold;
        color: white;
        position: absolute;
        right: 20%;
        top: 8%;
        @media (max-width: 768px) {
            font-size: 6vw; /* Ajusta o tamanho da fonte em telas menores */
            right: 5%; /* Ajusta a posição do h1 */
            top: 10%; /* Ajusta a posição do h1 */
        }
    }
`
export const Container = styled.section`
    background: black;
    background-size: cover;
    background-position: center;
    height: 64vh;
    padding: 20px; /* Adiciona padding para melhor espaçamento */
    @media (max-width: 768px) {
        height: auto; /* Permite altura automática em telas menores */
    }
`
export const Content = styled.div`
    padding-bottom: 70px;
    @media (max-width: 768px) {
        padding-bottom: 30px; /* Ajusta o padding em telas menores */
    }
`
