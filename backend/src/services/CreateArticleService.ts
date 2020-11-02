import { Repository } from "typeorm"
import Article from "../entity/Article"
import Post from "../entity/Post"

interface Request {
    post_id: string
    title: string
    titleImage: string
    thumb_url: string
    content: string
}


class CreateArticleService {
    private postRepository : Repository<Post>
    private articleRepository : Repository<Article>

    constructor(postReposiory: Repository<Post>, articleRepository: Repository<Article>){
        this.postRepository = postReposiory
        this.articleRepository = articleRepository
    }

    async execute({post_id, title, content, titleImage, thumb_url } : Request){

        const post = await this.postRepository.findOne(post_id)

        if(!post){
            throw Error('post not exits')
        }
    
        const article = this.articleRepository.create({
            title,
            Content:content,
            image:thumb_url,
            titleImage,
            post
        })
    
        await this.articleRepository.save(article)
        console.log(article)
        return article
    }
}

export default CreateArticleService