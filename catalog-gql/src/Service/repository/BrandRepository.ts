import { Brand, Repository } from '../../types';
import {BrandDao} from "./dao/BrandDao";


export interface BrandRepository extends Repository {
  getBrands: () => Promise<Brand[]>;
}

const getBrands = async () => {
  return BrandDao.list({});
};

export const BrandRepository: BrandRepository = {
  getBrands,
};