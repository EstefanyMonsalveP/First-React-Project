export type Sizes = {
  S: boolean 
  M: boolean 
  L: boolean 
  XL: boolean
}

export type Garment = {
  id: number
  name: string
  image: string
  reference:string
  sizes: Sizes
  price: number
}


export interface CartItem extends Garment {
  selectedSize: string
  quantity : number
}

