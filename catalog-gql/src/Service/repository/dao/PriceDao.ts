import { getDB } from './db';
import { Dao } from '../../../types';
import { SQLGenerator, TFilters } from './SQLGenerator/SQLGenerator';
import { TableName } from './SQLGenerator/config/TableConfig';
import { TPrice } from '../../../models/Price';

interface PriceEntity {
  id: string;
  site?: string;
  product_id?: string;
  currency: string;
  amount: string;
}

const list = async (where: { filters: TFilters }): Promise<TPrice[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(
    TableName.PRICE,
    ['id', 'amount', 'currency', 'site', 'product_id'],
    where.filters
  );
  const rows: PriceEntity[] = await getDB().any(query, queryInput);
  return transform(rows);
};

const transform = (entities: PriceEntity[]): TPrice[] => {
  return entities.map<TPrice>((entity) => {
    return {
      amount: parseFloat(entity.amount),
      url: entity.site,
      site: entity.site,
      currency: entity.currency,
    };
  });
};

export const PriceDao: Dao<TPrice, { filters: TFilters }> = {
  list,
};
