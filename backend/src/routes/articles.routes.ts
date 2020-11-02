import { Router } from 'express'


import upload from '../config/upload'

import articleController from '../Controllers/articleController'



const articlesRoutes = Router()

articlesRoutes.get('/:postName' , articleController.index)

articlesRoutes.post('/' ,upload.single('thumb') , articleController.create)

articlesRoutes.delete('/:article' , articleController.delete)

export default articlesRoutes