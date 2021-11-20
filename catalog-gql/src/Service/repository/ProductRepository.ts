import { Product, Repository } from "../../types";
import { ProductDao } from "./dao/ProductDao";
import {ProductsInput} from "../../GraphQL/generated/resolvers";

export interface ProductRepository extends Repository {
  getProductsForUser: (where: ProductsInput) => Promise<Product[]>;
}

const getProductsForUser = async (where: ProductsInput) => {
  return ProductDao.list(where);
};

export const ProductRepository: ProductRepository = {
  getProductsForUser
};
