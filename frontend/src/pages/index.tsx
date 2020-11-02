import { GetStaticProps } from 'next';
import Card from '../components/Card';
import Header from '../components/header';
import { Container, CardsBox } from '../styles/pages/home'
export interface IAppProps {
  props:{
    post: [{
      thumb: string,
      title: string
    }]
  }
}
const pages = ({posts}) => {

  return <Container>
      <Header title="O melhor blog do brasil"/>
      <CardsBox>
      {
        posts.map(post => (
          <Card key={post.id} post={post}/>
        ))
      }
      </CardsBox>
  </Container>
}

export const getStaticProps: GetStaticProps = async  (context) => {
  const response = await fetch('https://blog-allan-backend.herokuapp.com/post')
  const data = await response.json()
  return {
     props: {
       posts:data
     },
     revalidate: 60
  }
}

export default pages