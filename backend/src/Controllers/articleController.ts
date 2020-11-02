import {Request, Response} from 'express'
import { getRepository, Repository } from 'typeorm'
import Article from '../entity/Article'
import Post from '../entity/Post'
import CreateArticleService from '../services/CreateArticleService'

class ArticleController {


    async create(request:Request , response: Response){ 
        const {location: url=""} = request.file
        const { title, titleImage , content, post_id} = request.body
        const postRepository = getRepository(Post)
        const articleRepository = getRepository(Article)
        const createArticleService = new CreateArticleService(postRepository, articleRepository)

        const article = await createArticleService.execute({
            thumb_url: url,
            title,
            titleImage,
            content, 
            post_id
        })

        return response.json(article)
    }

    async delete (request: Request, response: Response) {
        const { article } = request.params

        const articleRepository = getRepository(Article)
        await articleRepository.delete(article)

        return response.send()
    }

    async index (request:Request, response:Response) {
        const { postName }  = request.params
        const articleRepository = getRepository(Article)
        const postRepository = getRepository(Post)

        const post = await postRepository.findOne({where:{title:postName}})
    
        const articles = await articleRepository.find({ where: {post: post?.id}, relations: ['post']})
        
        if(!articles){
            return response.json({error: 'post not exists'})
        }
        return response.json(articles)
    }
    
}


export default new ArticleController()