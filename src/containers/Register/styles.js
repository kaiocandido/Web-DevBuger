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

export const RightContainer = styled.div`
    background-color: black;
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
export const Title = styled.h2`
    font-size: 3rem; 
    justify-content: center;
    color: #FF441F;
    font-weight: 1000;
    @media (max-width: 768px) {
        font-size: 2rem; 
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
export const Header = styled.header`
    img {
        height: auto; 
        max-height: 300px;
        width: 100%; 
    }
`
export const Form = styled.form`
    width: 90%; 
    justify-content: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #2f2841;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
    @media (max-width: 768px) {
        padding: 20px; 
    }
    p {
        color: white;
        font-size: 18px;
        text-align: center;
        a {
            color: #FF441F;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    h1 {
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
    input {
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
        &::placeholder {
            color: #f0ffff94;
            font-weight: 600;
        }
    }
    label {
        color: #D1DCDF;
        margin-bottom: 10px;
    }
    p {
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
