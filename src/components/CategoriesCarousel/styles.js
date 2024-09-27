import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    .carousel-item{
        padding-right: 40px;
    }
    cursor: grab;
`

export const Title = styled.h2`
    font-size: 80px;
    color: #ffffff;
    text-align: center;
    position: relative;
    padding-bottom: 12px;
    font-weight: 400;
    margin-bottom: 90px;
    text-shadow: 2px 2px 0px #4A6E2A; 
    font-family: "Road Rage", sans-serif;
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #4A6E2A;
        left: calc(50% - 28px);
    }
`
export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 80%;
    height: 200px;
    border-radius: 30px;
`
export const CategoryButton = styled(Link)`
        color: white;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        margin-top: 50px;
        font-weight: 500;
        text-decoration: none;
        &:hover{
            color: green;
        }
`
