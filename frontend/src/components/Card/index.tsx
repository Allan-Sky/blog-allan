import * as React from 'react';
import { Container } from '../../styles/components/Card'
export interface IAppProps {
  post:{
    id:string
    thumb: string
    title: string
  }
}

const  App: React.FC<IAppProps>  = ({post}) => {
  return (
    <Container href={`/blog/${post.title}`}>
        <img src={post.thumb} alt={post.title}/>
        <h1>{post.title}</h1>
    </Container>
  );
}



export default App
