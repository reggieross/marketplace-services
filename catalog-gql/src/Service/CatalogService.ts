import { ProductRepository } from './repository/ProductRepository';
import { ProductsInput } from '../GraphQL/generated/resolvers';
import { BrandRepository } from './repository/BrandRepository';
import { PriceRepository } from './repository/PriceRepository';
import { TProduct } from '../models/Product';
import { TBrand } from '../models/Brand';
import { TPrice } from '../models/Price';

export interface CatalogService {}

export class CatalogService {
  private productRepo: ProductRepository;
  private brandRepo: BrandRepository;
  private priceRepoo: PriceRepository;
  constructor(userInfo: {}) {
    this.productRepo = ProductRepository;
    this.brandRepo = BrandRepository;
    this.priceRepoo = PriceRepository;
  }

  getProductsForUser = (where: ProductsInput): Promise<TProduct[]> => {
    console.info(where);
    return this.productRepo.getProductsForUser(where);
  };

  getBrands = (): Promise<TBrand[]> => {
    return this.brandRepo.getBrands();
  };

  getPricesForProduct = (productId: string | number): Promise<TPrice[]> => {
    return this.priceRepoo.getPriceForProduct(`${productId}`);
  };
}
