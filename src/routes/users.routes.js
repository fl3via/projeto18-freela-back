import { Router } from 'express'
import { createSignUp, createSignIn} from '../controllers/sign.controllers.js'
import { usersSchemas, authSchemas } from '../schemas/users.schemas.js'
import { validateSchema } from '../middlewares/validate.schemas.middleware.js'

const routerSing = Router()

routerSing.post('/signup', validateSchema(usersSchemas), createSignUp)
routerSing.post('/signin', validateSchema(authSchemas), createSignIn)  

export default routerSing 