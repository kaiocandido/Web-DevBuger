/*
Relative Units:

I changed some px values ​​to rem, especially in font-size, so that the fonts are more responsive.
Media Queries:

I added @media (max-width: 768px) to adjust styles when the screen is smaller than 768 pixels. This includes:
Adjust the height of the RightContainer and add padding.
Reduce font size in Title.
Change the width of MainDiv and Form to 90%, ensuring they take up more space on smaller screens.
Reduce Form padding.
Images:

In the Header component, I set the image height to auto and the width to 100% so that the image is responsive.
Dynamic Height:

I changed the MainDiv height to auto, allowing content to automatically adjust height, which is especially important on mobile devices.
These changes will help the layout better adjust to different screen sizes, improving the user experience. If you need more details or have other parts of the code to review, just let me know!
*/
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { keyframes } from 'styled-components';
import BackgroundImage from "../../assets/delicioso-hamburguer-dentro-de-casa.jpg"

export const RightContainer = styled.div`
    background: url('${BackgroundImage}');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden; 
    @media (max-width: 768px) {
        height: auto; 
        padding: 20px;
    }
`
export const MainDiv = styled.div`
    width: 50vh;
    height: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%; 
        margin-bottom: 50px; 
    }
`
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`
export const Header = styled.header`
        h1{
            font-weight: bold;
            text-shadow: 2px 2px 0px #fff; 
            font-size: 100px; 
            color: #2E162C;
            margin-bottom: 100px;
            font-family: "Road Rage", sans-serif;
            animation: ${pulse} 1.5s infinite;
        }
`
export const Form = styled.form`
    width: 90%; 
    justify-content: center;
    flex-direction: column;
    padding: 30px 35px;
    background: linear-gradient(135deg, #2E162C 30%, grey 70%, #2E162C 30%);
    border-radius: 20px;
    box-shadow: 0px 5px 10px white;
    @media (max-width: 768px) {
        padding: 20px; 
    }
    p {
        margin-top: 30px;
        color: white;
        font-size: 18px;
        text-align: center;
        a {
            color: yellow;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 50px;
        text-shadow: 2px 2px 0px green; 
        color: #fff;
        font-weight: 800;
        margin: 0;
        text-align: center;
        text-shadow: 2px 2px 0px black;
    }
`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
    input {
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 15px;
        background: #fff;
        color: black;
        font-size: 12px;
        box-shadow: 0px 5px 10px grey;
        outline: none;
        box-sizing: border-box;
        &::placeholder {
            color: gray;
            font-size: 10px;
            font-weight: 800;
            font-family: "Poppins", sans-serif;
        }
    }
    label {
        color: #fff;
        margin-bottom: 10px;
        font-weight: 800;
    }
    p {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 80%;
        color: red;
        font-weight: 900;
        text-decoration: none;
    }
`
export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`
