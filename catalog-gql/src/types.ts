export type Product = {
  id: string
  name: string
  brandId?: string
}

export type Brand = {
  id: string
  name: string
}

export type Price = {
  amount: string;
  url: string;
  site: string;
  currency?: string;
}

export type Environment = 'local' | 'dev' | 'prd';

export interface Dao<T, U> {
  list: (where: U) => Promise<T[]>
}

export interface Repository {
}