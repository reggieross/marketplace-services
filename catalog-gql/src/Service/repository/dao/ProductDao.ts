import { getDB } from './db';
import { Dao } from '../../../types';
import { SQLGenerator } from './SQLGenerator/SQLGenerator';
import { ProductsInput } from '../../../GraphQL/generated/resolvers';
import { TableName } from './SQLGenerator/config/TableConfig';
import { TProduct } from '../../../models/Product';

interface ProductEntity {
  id: string;
  brand_id?: string;
  description?: string;
  name: string;
}

const list = async (where: ProductsInput): Promise<TProduct[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(
    TableName.PRODUCT,
    ['id', 'brandId', 'name'],
    where.filters,
    where.pageInfo
  );
  const rows: ProductEntity[] = await getDB().any(query, queryInput);

  return transform(rows);
};

const transform = (entities: ProductEntity[]): TProduct[] => {
  return entities.map<TProduct>((entity) => {
    return {
      id: entity.id,
      name: entity.name,
      brandId: entity.brand_id,
    };
  });
};

export const ProductDao: Dao<TProduct, ProductsInput> = {
  list,
};
