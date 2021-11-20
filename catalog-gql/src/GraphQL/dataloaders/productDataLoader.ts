import * as DataLoader from 'dataloader';
import { CatalogService } from '../../Service/CatalogService';

export const productDataLoader = (
  xToken: string,
  catalogService: CatalogService
) => {
  return new DataLoader(
    async (ids: string[]) => {
      const products = await catalogService.getProductsForUser({});
      return ids.map(id => products[id] || null);
    },
    {
      maxBatchSize: 1000,
    }
  );
};
