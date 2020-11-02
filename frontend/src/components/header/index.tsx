import React from 'react';

import { Container } from '../../styles/components/header'

import { FaHome, FaRocket } from 'react-icons/fa'

interface HeaderProps{
    title:string
    thumb?:string
}

const Header: React.FC<HeaderProps> = ({thumb, title}) => {
    return (
  <Container thumb={thumb}>

          <FaRocket color='#fff'/>
          <h1>{title}</h1>
          <nav><a href="/"><FaHome /></a></nav> 

  </Container>)
}

export default Header