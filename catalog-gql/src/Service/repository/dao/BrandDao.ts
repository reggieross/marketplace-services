import { getDB } from './db';
import { Dao } from '../../../types';
import { SQLGenerator } from './SQLGenerator/SQLGenerator';
import { TableName } from './SQLGenerator/config/TableConfig';
import { TBrand } from '../../../models/Brand';

interface BrandEntity {
  id: string;
  name: string;
}

const list = async (where: {}): Promise<TBrand[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(TableName.BRAND, [
    'id',
    'name',
  ]);
  const rows: BrandEntity[] = await getDB().any(query, queryInput);
  return transform(rows);
};

const transform = (entities: BrandEntity[]): TBrand[] => {
  return entities.map<TBrand>((entity) => {
    return {
      id: entity.id,
      name: entity.name,
    };
  });
};

export const BrandDao: Dao<TBrand, {}> = {
  list,
};
