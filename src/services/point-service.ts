import db from '../database/connection'
import NotFoundError from '../exceptions/not-found-error'
import Item from '../model/item'
import Point from '../model/point'

export interface PointIndexOptions {
    filter: {
        city: string,
        uf: string,
        items: number[]
    }
}

export default class PointService {

    async index(options: PointIndexOptions): Promise<Point[]> {
        return await db('points')
            .join('point_items', 'point_items.point_id', '=', 'points.id')
            .whereIn('point_items.item_id', options.filter.items)
            .where('city', options.filter.city)
            .where('uf', options.filter.uf)
            .distinct()
            .select('points.*') as Point[]
    }


    async get(id: number): Promise<Point> {
        const point: Point = await db('points').where('id', id).first()

        if (!point)
            throw new NotFoundError()

        const items = await db('items')
            .join('point_items', 'point_items.item_id', '=', 'items.id')
            .where('point_items.point_id', id)
            .select('items.*')

        point.items = items as Item[]

        return point
    }

    async create(point: Point): Promise<Point> {

        const trx = await db.transaction()

        const { items, ...pointToInsert } = point
        const insertedIds = await trx('points').insert(pointToInsert)
        const point_id = insertedIds[0]

        let pointItems = []
        if (items) {
            pointItems = items.map(({ id: item_id }) => ({
                item_id,
                point_id
            }))

            await trx('point_items').insert(pointItems)
        }

        trx.commit()

        return { id: point_id, ...pointToInsert, items }
    }

}
