import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 72px;
    
    .root{
        background: black;
    }
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
    p{
        color: white;
        font-weight: 300;
        word-spacing: 5px;
    }
    span{
        color: #FF441F;
        font-weight: 700;
    }

    div{
        display: flex;
        align-items: center;
        gap: 15px;
    }
`
export const Logout = styled.button`
    color: red;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`
export const ContainerLink = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`