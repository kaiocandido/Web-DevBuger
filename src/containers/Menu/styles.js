import styled from "styled-components";
import HamburguerBanner from "../../assets/pexels-valeria-boltneva-1639562 1.svg"

export const Container = styled.div`
    width: 100%;
    min-width: 100vh;
    background-color: #f0f0f0;
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
    }
    span{
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        color: white;
        display: block;
    }
`
export const CategoriesMenu = styled.div``
export const ProductsContainer = styled.div``
