import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    button{
        cursor: pointer;
    }
`
export default GlobalStyles