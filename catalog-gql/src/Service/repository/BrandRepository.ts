import { Repository } from '../../types';
import { BrandDao } from './dao/BrandDao';
import { TBrand } from '../../models/Brand';

export interface BrandRepository extends Repository {
  getBrands: () => Promise<TBrand[]>;
}

const getBrands = async () => {
  return BrandDao.list({});
};

export const BrandRepository: BrandRepository = {
  getBrands,
};
