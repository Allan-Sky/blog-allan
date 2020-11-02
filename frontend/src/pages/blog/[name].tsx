import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router'
import {  Container, Main, Loading } from '../../styles/pages/blog/name'
import HeaderHome from '../../components/header'
interface ArticleProps{
  articles: [
    {
      id: string
    title: string
    image: string
    titleImage:  string
    Content:  string
    created_at:  string
    updated_at:  string
    post: {
      id:  string
      title:  string
      thumb:  string
      created_at:  string
      updated_at:  string
    }
  }
  ]
}
const Home: React.FC<ArticleProps> = ({articles}) => {
  const {isFallback} = useRouter()

  if(isFallback){
    console.log('a')
    return (
      <Loading><h1>Carregando</h1></Loading>
    )
  }

  if(!isFallback){
    console.log(articles.length)
  }
  return (
    <Container>
        <HeaderHome 
        title={articles[0].post.title}
        thumb={articles[0].post.thumb}/>

        <Main>
          {
            articles.map(article => (
              <article key={article.id}>
                <h2>{article.title}</h2>
                <h3>{article.titleImage}</h3>
                <img src={article.image} alt={article.titleImage}/>
                <p>{article.Content}</p>
              </article>
            ))
          }
        </Main>
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps  = async (context)  => {
  const response = await fetch(`https://blog-allan-backend.herokuapp.com/article/${context.params.name}`)
  const articles = await response.json()
 
  return {
    props: { 
      articles
    },
    revalidate:1
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://blog-allan-backend.herokuapp.com/post?page=1')
  const data = await response.json()
  const paths = data.map(x => ({params: {name: x.title}}))
  
  return {
    paths: paths,
    fallback:true
  }
}