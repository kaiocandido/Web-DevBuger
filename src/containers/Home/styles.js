import styled from "styled-components"
import BackgroundImg from "../../assets/background.svg"
import BackgroundSection from "../../assets/Padrao.png"

export const Banner = styled.div`
    background: url('${BackgroundImg}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1{
        font-size: 80px;
        font-weight: 800;
        color: white;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`
export const Container = styled.section`
    background: url('${BackgroundSection}');
    height: 450px;
    background-color: black;
`
export const Content = styled.div`

`
