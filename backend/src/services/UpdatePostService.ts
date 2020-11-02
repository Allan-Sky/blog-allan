import { Repository } from "typeorm"
import Post from "../entity/Post"

interface Request {
    title:string
    thumb_url:string
    id:string
}

class UpdatePostService {
    private postRepository : Repository<Post>

    constructor(postRepository: Repository<Post>){
        this.postRepository = postRepository
    }

    async execute({title, thumb_url, id} :Request){
        
        const post = await this.postRepository.findOne({where:{id}})

        if(!post){
            throw Error('post not exists')
        }
        
        post.title = title
        post.thumb = thumb_url
    
        await this.postRepository.save(post)

        return post
    }
}   

export default UpdatePostService