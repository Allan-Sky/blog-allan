import { Router } from 'express'
import articlesRoutes from './articles.routes'
import postRoutes from './posts.routes'

const routes = Router()

routes.use('/post',postRoutes)
routes.use('/article' , articlesRoutes)
export default routes