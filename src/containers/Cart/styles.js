import styled from "styled-components";
import Background from "../../assets/background.svg"
import { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #2E162C;
    min-height: 100vh;
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
    background-color: #2E162C;
    background-size: cover;
    background-position: center;
    background: url("${Background}");
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 280px;

    p{
        font-weight: bold;
        text-shadow: 2px 2px 0px #2E162C; 
        font-size: 100px; 
        color: white;
        margin-bottom: 100px;
        font-family: "Road Rage", sans-serif;
        animation: ${pulse} 1.5s infinite;
    }
`
export const Title = styled.h1`
    margin-top: 50px;
    font-size: 32px;
    color: white;
    font-weight: 800px;
    padding-bottom: 12px;
    text-align: center;
    position: relative;
    &&::after{
        position: absolute;
        content: "";
        width: 56px;
        bottom: 0;
        background-color: white;
        height: 4px;
        left: calc(50% - 25px);
    }
`
export const Content = styled.div`
    display: grid;
<<<<<<< HEAD
    grid-template-columns: 1fr 40%;
=======
    grid-template-columns: 1fr 20%;
>>>>>>> 8cf4e43e08f05b0ed367f228491a1152e9339142
    background-color: #2E162C;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;


`