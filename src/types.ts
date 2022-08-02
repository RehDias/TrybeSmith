import { Request } from 'express';

export type Index = { id: number };

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

export type Orders = Index & { userId: number };

export type Login = {
  username: string
  password: string
};

export type ReqUser = Request & { 
  user?: object | number | string | [] | void | any
};

export type AddProduct = Omit<Products, 'id'>;
export type AddUsers = Omit<Users, 'id'>;