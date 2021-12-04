import { Repository } from '../../types';
import { ProductDao } from './dao/ProductDao';
import { ProductsInput } from '../../GraphQL/generated/resolvers';
import { TProduct } from '../../models/Product';

export interface ProductRepository extends Repository {
  getProductsForUser: (where: ProductsInput) => Promise<TProduct[]>;
}

const getProductsForUser = async (where: ProductsInput) => {
  return ProductDao.list(where);
};

export const ProductRepository: ProductRepository = {
  getProductsForUser,
};
