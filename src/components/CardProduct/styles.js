import styled from "styled-components";

export const Container = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: black;
    cursor: grab;
    box-shadow: 0 1px 1px gray;
    width: 80%;
    height: 150px;
    position: relative;
    div{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    p{
        font-size: 14px;
        color: #fff;    
        line-height: 20px;
        margin-top: 25px;
        font-weight: 600;
        text-align: center;
    }
    strong{
        margin-top: 5px;
        color: #fff;
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
    }
`
export const CardImg = styled.img`
    height: 100px;
    position: absolute;
    top: -60px;
`
