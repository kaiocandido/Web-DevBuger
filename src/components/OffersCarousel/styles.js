import styled from "styled-components";

export const Container = styled.div`
    .product-item{
        padding-right: 40px;
    }
    height: 280px;
    padding-right: 40px;
    padding-left: 40px;
    overflow-x: hidden;
    .react-multi-carousel-list{
        overflow: visible;
    }
`
export const Title = styled.h2`
    font-size: 32px;
    color: #ffffff;
    text-align: center;
    position: relative;
    padding-bottom: 12px;
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 50px;
    font-family: "Poppins", sans-serif;
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #FF441F;
        left: calc(50% - 28px);
    }
`
