import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Post from '../entity/Post'
import UpdatePostService from '../services/UpdatePostService'

class postController {

    async create (request:Request, response: Response) {
        const {location: url= ""} = request.file 
        const {title} = request.body
        const postRepository = getRepository(Post)

        const post = postRepository.create({
            title,
            thumb:url
        })
    
        await postRepository.save(post)
    
        return response.json(post)
        
    }

    async index (request:Request , response:Response) {
        const {page = 1} = request.query

        const postRepository = getRepository(Post)
        const posts = await postRepository.createQueryBuilder('posts').limit(10).offset(10 * (page as number - 1)).getMany()
        
        response.json(posts)
    }

    async delete (request:Request , response:Response) {
        const { id } = request.params
        const postRepository = getRepository(Post)
        await postRepository.delete(id)
        
        return response.send()
    
    }


    async update(request:Request, response:Response){
        const { id } = request.params
        const {thumb_url, title} = request.body
        const postRepository = getRepository(Post)
        const updatePostService = new UpdatePostService(postRepository)
        const post = await updatePostService.execute({thumb_url, title, id})
        response.json(post)
    }
}

export default new postController()