import { Context } from './context';
import {
  CatalogMutationResponse,
  ProductResponse,
  Resolvers,
} from './generated/resolvers';

export const resolvers: Resolvers<Context> = {
  Query: {
    catalog: async (_, {}, ctx) => {
      return {} as any;
    },
  },
  Mutation: {
    catalog: async (_, {}, ctx) => {
      return {} as CatalogMutationResponse;
    },
  },
  ProductResponse: {
    filters: async (_, {}, ctx) => {
      const brand = await ctx.catalogService.getBrands();
      return { brand };
    },
    products: async (prev, { input }, ctx) => {
      return ctx.catalogService.getProductsForUser(input);
    },
  },
  Product: {
    Price: async (prev, _, ctx) => {
      return ctx.catalogService.getPricesForProduct(prev.id);
    },
  },
  CatalogMutationResponse: {
    likeProduct: async (prev, { input }, ctx) => {
      //TODO Add logic to actually like product
      return { success: true };
    },
  },
};
