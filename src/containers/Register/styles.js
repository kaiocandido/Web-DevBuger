import styled from "styled-components"
import BackgroundLogin from "../../assets/bg.svg"
import ImgRightContainer from "../../assets/Padrao.png"
import { Link as ReactLink } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`
export const LeftContainer = styled.div`
    //background: url('${BackgroundLogin}');
    background-color: black;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 80%;
    }
    
`
export const RightContainer = styled.div`
    background: url('${ImgRightContainer}');
    background-color: #FF441F;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 50%;
    p{
        color: white;
        font-size: 18px;
        a{
            color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
export const Title = styled.h2`
    color: white;
    font-size: 40px;
    span{
        color: black;
        ;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    color: white;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border-radius: 5px;
    input{
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 5px;
        padding: 0 16px;
        
    }
    label{
        font-size: 18px;
        font-weight: bold;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: black;
        font-weight: 10px;
        
    }
`
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`