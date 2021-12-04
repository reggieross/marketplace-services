import { Table, TableConfig, TableName, Tables } from './config/TableConfig';
import { createWhere } from './CreateWhereClause';
import { createSelect } from './CreateSelectClause';
import {
  PaginationInput,
  ProductFiltersInput,
} from '../../../../GraphQL/generated/resolvers';
import { createPagination } from './CreatePaginationClause';

export type TFilters = ProductFiltersInput | { productIds: string[] };

const genSQL = async (
  table: TableName,
  properties: string[],
  filters: TFilters = {},
  paginationInfo?: PaginationInput
): Promise<{ query: string; queryInput?: Record<string, any> }> => {
  const [select, where] = await Promise.all([
    createSelect(table, properties),
    createWhere(table, filters),
  ]);
  const limit = createPagination(paginationInfo);
  return {
    query:
      where.length > 0 ? `${select} ${where} ${limit};` : `${select} ${limit};`,
    queryInput: filters,
  };
};

export const SQLGenerator = { genSQL };
