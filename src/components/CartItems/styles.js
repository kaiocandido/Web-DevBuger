import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80;
    border-radius: 16px;
`
export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        background-color: black;
        color: #fff;
        border-radius: 4px;
        border: none;
        &:hover{
            
        }

    }
`
export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`
