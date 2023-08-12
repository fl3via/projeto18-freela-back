import { Router } from 'express'
import routerSing from './users.routes.js'


const router = Router()

router.use(routerSing)
// router.use()
// router.use()
// router.use()

export default router
