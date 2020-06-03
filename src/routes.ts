import express from 'express'
import { itemRouter } from './controllers/item-controller'
import { pointRouter } from './controllers/point-controller'

const router = express.Router()

router.use('/items', itemRouter())
router.use('/points', pointRouter())

export default router
