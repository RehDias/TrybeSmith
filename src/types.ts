export type Index = {
  id: number
};

export type Products = Index & {
  name: string
  amount: string
  orderId?: number
};

export type Users = Index & {
  username: string
  classe: string
  level: number
  password: string
};

export type AddProduct = Omit<Products, 'id'>;
export type AddUsers = Omit<Users, 'id'>;