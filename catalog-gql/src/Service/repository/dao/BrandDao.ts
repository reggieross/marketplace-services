import { getDB } from './db';
import {Brand, Dao, Product} from '../../../types';
import { SQLGenerator } from './SQLGenerator/SQLGenerator';

interface BrandEntity {
  id: string;
  name: string;
}

const list = async (where: {}): Promise<Product[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(
    'brand',
    ['id', 'name'],
  );
  const rows: BrandEntity[] = await getDB().any(query, queryInput);
  return transform(rows);
};

const transform = (entities: BrandEntity[]): Product[] => {
  return entities.map<Product>(entity => {
    return {
      id: entity.id,
      name: entity.name,
    };
  });
};

export const BrandDao: Dao<Brand, {}> = {
  list,
};
