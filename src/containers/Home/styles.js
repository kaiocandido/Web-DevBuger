import styled from "styled-components";
import BackgroundImg from "../../assets/delicioso-hamburguer-dentro-de-casa.jpg";
import { keyframes } from 'styled-components';

export const Main = styled.main`
    background-color: #2e162c;
    height: 100%;
`
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`
export const Banner = styled.div`
    background: url('${BackgroundImg}');
    text-align: center;
    background-size: cover;
    background-position: center;
    height: 300px;
    position: relative; 
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 5vw;
        font-weight: bold;
        color: white;
        position: absolute;
        right: 15%;
        top: 15%;
        text-shadow: 2px 2px 0px #4A6E2A; 
        animation: ${pulse} 1.5s infinite;
        @media (max-width: 768px) {
            font-size: 6vw;
            right: 5%; 
            top: 10%; 
        }
    }
`
export const Container = styled.section`
    background: #2e162c;
    background-size: cover;
    background-position: center;
    //padding: 20px;
    margin-top: 14px;
    @media (max-width: 768px) {
        height: auto;
    }
`
export const Content = styled.div`
    //sspadding-bottom: 70px;
    @media (max-width: 768px) {
        padding-bottom: 30px; 
    }
`
