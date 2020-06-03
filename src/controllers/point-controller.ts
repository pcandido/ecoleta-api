import express, { Request, Response, Router } from 'express'
import NotFoundError from '../exceptions/not-found-error'
import ItemsService from '../services/item-service'
import PointService from '../services/point-service'

class PointController {

    pointService: PointService
    itemService: ItemsService

    constructor() {
        this.pointService = new PointService()
        this.itemService = new ItemsService()
    }

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query
        const parsedItems = (Array.isArray(items) ? items : [items]).map(item => Number(item))
        const points = await this.pointService.index({
            filter: {
                city: city as string,
                uf: uf as string,
                items: parsedItems
            }
        })

        res.json(points)
    }

    async get(req: Request, res: Response) {
        const { id } = req.params

        try {
            const point = await this.pointService.get(Number(id))

            const { items, ...serializedPoint } = point

            const serializedItems = items?.map(item => ({
                title: item.title,
                image: this.itemService.getUri(item)
            }))

            res.json({ ...serializedPoint, items: serializedItems })
        } catch (e) {
            if (e instanceof NotFoundError)
                res.status(404).json({ message: `Point ${id} not found` })
            else
                throw e
        }
    }

    async create(req: Request, res: Response) {

        const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body

        const created = await this.pointService.create({
            image: 'https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items: items.map((id: number) => ({ id }))
        })

        res.json(created)
    }
}

export function pointRouter(): Router {
    const router = express.Router()
    const pointsController = new PointController()

    router.get('/', (req, res) => pointsController.index(req, res))
    router.get('/:id', (req, res) => pointsController.get(req, res))
    router.post('/', (req, res) => pointsController.create(req, res))

    return router
}
