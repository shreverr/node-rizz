import express from 'express'
import type { Router } from 'express'
import { generateAiFlow } from '../controllers/promptController';

const router: Router = express.Router()

router.post('/generate', generateAiFlow)

export default router;
