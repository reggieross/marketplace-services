import { TableConfig } from './config/TableConfig';
import {
  Limit,
  PaginationInput,
} from '../../../../GraphQL/generated/resolvers';

export const createPagination = (paginationInfo?: PaginationInput) => {
  if (!paginationInfo || paginationInfo.page < 0) {
    return 'Limit 50 offset 0';
  }

  const offset =
    (paginationInfo.page - 1) * getNumberForLimit(paginationInfo.limit);

  return `Limit ${getNumberForLimit(paginationInfo.limit)} offset ${offset}`;
};

const getNumberForLimit = (limit: Limit) => {
  switch (limit) {
    case Limit.Fifty:
      return 50;
    case Limit.OneHundred:
      return 100;
    case Limit.FiveHundred:
      return 500;
  }
};
