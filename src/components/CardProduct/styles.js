import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    cursor: grab;
    box-shadow: 0 4px 8px rgba(255, 68, 31, 0.5);
    width: 80%;
    height: 120px;
    position: relative;
    div{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    p{
        font: 18px;
        color: #FF441F;    
        line-height: 20px;
        margin-top: 20px;
        font-weight: 700;
    }
    strong{
        color: black;
        font-size: 22px;
        font-weight: 800;
        line-height: 20px;
    }
`
export const CardImg = styled.img`
    height: 100px;
    position: absolute;
    top: -55px;
`