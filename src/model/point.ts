import Item from './item'

export default interface Point {

    id?: number
    name: string
    image: string
    email: string
    whatsapp: string
    latitude: number
    longitude: number
    city: string
    uf: string
    items?: Item[]
}
