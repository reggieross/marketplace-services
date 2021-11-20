import { getDB } from './db';
import { Dao, Product } from '../../../types';
import { SQLGenerator } from './SQLGenerator/SQLGenerator';
import {
  ProductFiltersInput,
  ProductsInput,
} from '../../../GraphQL/generated/resolvers';

interface ProductEntity {
  id: string;
  brand_id?: string;
  description?: string;
  name: string;
}

const list = async (where: ProductsInput): Promise<Product[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(
    'product',
    ['id', 'brandId', 'name'],
    where.filters,
    where.pageInfo
  );
  const rows: ProductEntity[] = await getDB().any(query, queryInput);
  return transform(rows);
};

const transform = (entities: ProductEntity[]): Product[] => {
  return entities.map<Product>(entity => {
    return {
      id: entity.id,
      name: entity.name,
      brandId: entity.brand_id,
    };
  });
};

export const ProductDao: Dao<Product, ProductsInput> = {
  list,
};
