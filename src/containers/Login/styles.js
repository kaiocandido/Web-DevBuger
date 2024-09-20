import styled from "styled-components"
import { Link as ReactLink } from "react-router-dom"

export const RightContainer = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh

`
export const Title = styled.h2`
    font-size: 60px;
    justify-content: center;
    color: #FF441F;
    font-weight: 1000;
   
`
export const MainDiv = styled.div`
    width: 50vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
`
export const Header = styled.header`
    img{
        height: 300px;
    }
`
export const Form = styled.form`
    width: 60%;
    justify-content: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
    p{
        color: white;
        font-size: 18px;
        text-align: center;
        a{
            color:  #FF441F;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    h1{
        color: #FF441F;
        font-weight: 800;
        margin: 0;
        text-align: center;
    }
`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
    input{
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 15px;
        background: #514869;
        color: #f0ffffde;
        font-size: 12pt;
        box-shadow: 0px 10px 40px #00000056;
        outline: none;
        box-sizing: border-box;
        
        &::placeholder{
            color: #f0ffff94;
            font-weight: 600;
        }
        
    }
    label{
        color: #D1DCDF;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: white;
        font-weight: 10px;
        
    }
`
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`
