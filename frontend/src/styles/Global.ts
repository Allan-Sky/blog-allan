import { createGlobalStyle } from 'styled-components'

export  default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size:14px;
    }
    body{
        font: 16px bold Roboto, sans-serif;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
    }
`