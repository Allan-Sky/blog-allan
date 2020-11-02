import { Router } from 'express'

import upload from '../config/upload'
import postController from '../Controllers/postController'
const postRoutes = Router()


postRoutes.post('/', upload.single('thumb'), postController.create )

postRoutes.get('/', postController.index)

postRoutes.delete('/:id', postController.delete)

postRoutes.put('/:id',upload.single('thumb') ,postController.update )

export default postRoutes

