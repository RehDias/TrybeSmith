export type Index = {
  id: number
};

export type Products = Index & {
  name: string
  amount: string
  orderId?: number
};

export type AddProduct = Omit<Products, 'id'>;