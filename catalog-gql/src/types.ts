export type Environment = 'local' | 'dev' | 'prd';

export interface Dao<T, U> {
  list: (where: U) => Promise<T[]>;
}

export interface Repository {}
