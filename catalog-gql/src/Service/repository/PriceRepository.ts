import { Repository } from '../../types';
import { PriceDao } from './dao/PriceDao';
import { TPrice } from '../../models/Price';

export interface PriceRepository extends Repository {
  getPriceForProduct: (productId: string) => Promise<TPrice[]>;
}

const getPriceForBrand = async (productId: string) => {
  const filters = { productIds: [productId] };
  return PriceDao.list({ filters });
};

export const PriceRepository: PriceRepository = {
  getPriceForProduct: getPriceForBrand,
};
