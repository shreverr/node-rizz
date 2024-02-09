import { Router } from 'express'
import authRouter from './authRouter'
import promptRouter from './promptRouter'
// import { launchNodeRedInstance } from '../controllers/nodeRedInstanceController'

const router: Router = Router()

router.use('/auth', authRouter)
router.use('/ai', promptRouter)

// router.use('/node-red', launchNodeRedInstance)
// router.use('/company', companyRouter)

export default router