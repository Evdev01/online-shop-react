interface IGallery {
    name: string
    img: string
}

export interface ICard {
    id: number
    image: string
    model: string
    gallery: IGallery[]
    stockCount: number
    stock: boolean
    description: string
    price: number
    article: string
    quantity: string
}