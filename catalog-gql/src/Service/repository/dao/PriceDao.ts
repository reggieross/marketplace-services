import {getDB} from './db';
import {Dao, Price} from '../../../types';
import {SQLGenerator, TFilters} from './SQLGenerator/SQLGenerator';
import {TableName} from "./SQLGenerator/config/TableConfig";

interface PriceEntity {
  id: string;
  site?: string;
  product_id?: string;
  currency: string;
  amount: string;
}

const list = async (where: { filters: TFilters }): Promise<Price[]> => {
  const { query, queryInput } = await SQLGenerator.genSQL(
    TableName.PRICE,
    ['id', 'amount', 'currency', 'site', 'product_id'],
    where.filters
  );
  console.log(query);
  console.log(where);
  const rows: PriceEntity[] = await getDB().any(query, queryInput);
  return transform(rows);
};

const transform = (entities: PriceEntity[]): Price[] => {
  return entities.map<Price>(entity => {
    return {
      amount: entity.amount,
      url: entity.site,
      site: entity.site,
      currency: entity.currency,
    };
  });
};

export const PriceDao: Dao<Price, { filters: TFilters }> = {
  list,
};
