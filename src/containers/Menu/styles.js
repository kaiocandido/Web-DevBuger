import styled from "styled-components";
import HamburguerBanner from "../../assets/pexels-valeria-boltneva-1639562 1.svg"
import { Link } from "react-router-dom";
import { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 100vh;
    background-color: #f0f0f0;
    background: black;
`

export const Banner = styled.div`
    background: url("${HamburguerBanner}") no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    height: 480px;
    background-color: black;
    background-size: cover;
    width: 100%;
    position: relative;
    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: white;
        position: absolute;
        right: 20%;
        top: 30%;
        text-shadow: 2px 2px 0px #4A6E2A;
    }
    span{
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        color: white;
        display: block;
    }
`

export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 100px;
    margin: 50px auto;
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

export const CategoryButton = styled(Link)`
    animation: ${pulse} 5s infinite;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    cursor: pointer;
    background: none;
    margin-bottom: 50px;
    color: ${(props) => props.$isActiveCategory ? 'grey' : 'white'};
    text-shadow: 2px 2px 0px #4A6E2A;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '2px solid white'};
    
`