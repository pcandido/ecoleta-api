import { base_url, uploads_route } from './../environment'
import db from '../database/connection'
import Item from '../model/item'

export default class ItemsService {

    async index(): Promise<Item[]> {
        return await db('items').select('*')
    }

    getUri(item: Item): string {
        return `${base_url}/${uploads_route}/${item.image}`
    }

}
