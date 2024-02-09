import express from 'express'
import type { Router } from 'express'
import { loginUser, registerUser } from '../controllers/authController';

const router: Router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router;
