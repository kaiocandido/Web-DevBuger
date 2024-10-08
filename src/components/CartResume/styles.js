import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    *{
        font-weight: 500;
        color: black;
    }

    .container-top{
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas:
        'title title'
        'itens itens-price'
        'delivery-text delivery-text-price'
        ;
        .title{
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            background-color: black;
            color: white;
            width: 100%;
            padding: 15px;
            text-align: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .itens{
            grid-area: itens;
            padding-left: 20px;
        }
        .itens-price{
            grid-area: itens-price;
            padding-right: 20px;
        }

        .delivery-text{
            grid-area: delivery-text;
            padding-left: 20px;
        }
        .delivery-text-price{
            grid-area: delivery-text-price;
            padding-right: 20px;
        }
    }

    .container-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        margin-top: 24px;
        padding: 20px;

        *{
            font-weight: 700;
        }
    }

`

