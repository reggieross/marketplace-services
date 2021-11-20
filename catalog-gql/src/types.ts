export interface Product {
  id: string
  name: string
  brandId?: string
}

export interface Brand {
  id: string
  name: string
}

export interface Price {
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