import { Price, Repository } from '../../types';
import { PriceDao } from './dao/PriceDao';

export interface PriceRepository extends Repository {
  getPriceForProduct: (productId: string) => Promise<Price[]>;
}

const getPriceForBrand = async (productId: string) => {
  const filters = { productIds: [productId] };
  return PriceDao.list({ filters });
};

export const PriceRepository: PriceRepository = {
  getPriceForProduct: getPriceForBrand,
};
