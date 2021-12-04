import { TableConfig } from './config/TableConfig';
import { TFilters } from './SQLGenerator';

export const createWhere = async (
  table: keyof TableConfig,
  filters: TFilters = {}
): Promise<string> => {
  const allFilters = Object.entries(filters);
  if (allFilters.length === 0) {
    return '';
  }

  return `Where ${transformFilters(table, filters).join(' and ')}`;
};

const transformFilters = (
  table: keyof TableConfig,
  filters: TFilters
): string[] => {
  return Object.keys(filters).reduce((acc, property) => {
    const transformedFilter = transformFilter(
      table,
      property as keyof TFilters
    );

    if (transformedFilter) {
      acc.push(transformedFilter);
    }
    return acc;
  }, []);
};

const transformFilter = (table: string, property: keyof TFilters): string => {
  switch (property) {
    case 'brandIds':
      return getStringValueForStringFilter(table, property, 'brand_id');
    case 'productIds':
      return getStringValueForStringFilter(table, property, 'product_id');
  }

  return undefined;
};

const getStringValueForBetweenFilter = (
  table,
  propertyName: string,
  columnName: string
) => {
  return `${table}.${columnName} between $(${propertyName}.start) and $(${propertyName}.end)`;
};

const getStringValueForStringFilter = (
  table,
  propertyName: string,
  columnName: string
) => {
  return `${table}.${columnName} in ($(${propertyName}:csv))`;
};
