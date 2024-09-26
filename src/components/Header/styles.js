import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 45px;
    font-family: "Poppins", sans-serif;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    div{
        margin-left: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;

        hr{
            height: 24px;
            border: 1px solid #4A6E2A;
        }
    }
`
export const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;
    cursor: pointer;
    hr{
            height: 24px;
            border: 1px solid #4A6E2A;
        }
    &:hover{
        color: #FF441F;
    }
`
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    margin-bottom: 25px;

    hr{
        height: 24px;
        border: 1px solid #4A6E2A;
    }
    p{
        color: white;
        font-weight: 300;
        word-spacing: 5px;
    }
    span{
        color: #4A6E2A;
        font-weight: 700;
    }

    div{

        display: flex;
        align-items: center;
        gap: 15px;
    }
`
export const Logout = styled.button`
    border: none;
    background: black;
    margin-right: -30px;
`
export const ContainerLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 25px;
`