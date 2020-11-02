import styled, {css } from 'styled-components';

interface HeaderHomeProps {
    thumb: string
}

export const Container = styled.header<HeaderHomeProps>`
    background-color: ${props => props.theme.colors.header};
    background-image: url(${props => props.thumb});
    background-attachment: scroll;
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    width:100%;
    height: 7rem;
    display:grid;
    grid-template-columns: repeat(3 , 1fr);
    h1{
        text-align:center;
        color:white;
    }

    a{

        color:white;



        a:hover{
            svg{
                color:lightgray;
            }
        }
    }
    img{
        max-height: 5rem;
        max-width: 5rem;
    }
    nav, h1, svg{
        justify-self:center;
        align-self: center;
    }

    svg{
        font-size: 4rem;
    }


    margin-bottom: 4rem;
    
    @media (max-width: 860px){
        &{
            height:5rem;
            grid-template-columns: repeat(2 , 1fr);
            ${props => props.thumb && css`
                grid-template-columns:repeat(1, 1fr);
                svg, img{
                    display:none;
                }
                h1{
                    align-self: flex-end;
                }
            `}
            
        }

        h1{
            display:${props => props.thumb ? 'initial' : 'none'};
            font-size:1.6rem;
        }
    }
`;
 
