import express, { Request, Response, Router } from 'express'
import ItemsService from '../services/item-service'

class ItemController {

    itemService: ItemsService

    constructor() {
        this.itemService = new ItemsService()
    }

    async index(req: Request, res: Response) {
        const items = await this.itemService.index()
        const serialized = items.map(item => ({
            id: item.id,
            title: item.title,
            image: this.itemService.getUri(item)
        }))
        res.json(serialized)
    }
}

export function itemRouter(): Router {
    const router = express.Router()
    const itemsController = new ItemController()

    router.get('/', (req, res) => itemsController.index(req, res))

    return router
}
