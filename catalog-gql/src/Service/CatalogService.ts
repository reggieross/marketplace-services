import { ProductRepository } from './repository/ProductRepository';
import { Brand, Price, Product } from '../types';
import { ProductsInput } from '../GraphQL/generated/resolvers';
import { BrandRepository } from './repository/BrandRepository';
import { PriceRepository } from './repository/PriceRepository';

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

  getProductsForUser = (where: ProductsInput): Promise<Product[]> => {
    return this.productRepo.getProductsForUser(where);
  };

  getBrands = (): Promise<Brand[]> => {
    return this.brandRepo.getBrands();
  };

  getPricesForProduct = (productId: string | number): Promise<Price[]> => {
    return this.priceRepoo.getPriceForProduct(`${productId}`);
  };
}
