import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        overflow: hidden; /* Remove as barras de rolagem */
    }
    button{
        cursor: pointer;
    }
`
export default globalStyles