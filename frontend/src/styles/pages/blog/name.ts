import styled from 'styled-components';



export const Container = styled.div`
    width:100%;

`;


export const Main = styled.main`
    width: 65%;
    margin: 0 auto 10rem auto;
    background-color: ${props => props.theme.colors.mainBack};
    padding: 3rem;
    box-sizing: content-box;
    border-radius: 1rem;

    


    article {
        h3{
            margin: 1rem 0;
        }
        img{
            max-height: 100%;
            max-width: 100%;
            margin: 1rem 0;
        }

        p{
            text-align: justify; 
            font-weight: 500;
            font-size:1.3rem;
            margin: 1rem 0;
            width:95%;
            
        }
    }

    @media (max-width: 860px){
        &{
            width:85%;
            margin: 0 auto;
            padding: 2rem;
        }

    }
`

export const Loading = styled.div`
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    
`

