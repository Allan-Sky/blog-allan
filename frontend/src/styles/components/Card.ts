import styled from 'styled-components';

export const Container = styled.a`
  width: 60rem;
  height:8rem;
  
  transform: skewX(-10deg);
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content:space-around;
  align-items:center;
  text-decoration:none;

  background-color: white;
  img{
      height:90%;
      width: 90%;
      border-radius: .2rem;
  }
  h1{
      color:black;
  }

  img, h1{
    align-self: center;
    justify-self:center;
  }

  transition:all .3s;
  &:hover{
    transform: skewX(0deg);
    border-left: .5rem solid ${props => props.theme.colors.cardDash};
    border-right: .5rem solid ${props => props.theme.colors.cardDash};
  }


  @media (max-width: 860px) {
    &{
      width:100%;
      transform:none;

      &:hover{
        border:none;
        background-color:lightgray;
      }
    }
  }
`;
