import { Context } from './context';
import {
  CatalogMutationResponse,
  ProductResponse,
  Resolvers,
} from './generated/resolvers';
import { AuthenticationService } from '@rross_llc/api-service-pack';

export const resolvers: Resolvers<Context> = {
  Query: {
    catalog: async (_, {}, ctx) => {
      return {} as ProductResponse;
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
      const products = await ctx.catalogService.getProductsForUser(input);
      return products;
    },
  },
  Product: {
    Price: async (prev, _, ctx) => {
      return ctx.catalogService.getPricesForProduct(prev.id);
    },
  },
  CatalogMutationResponse: {
    likeProduct: async (prev, { input }, ctx) => {
      console.log(ctx.token);
      const { valid, user } = await AuthenticationService.validateToken(
        ctx.token,
        true
      );

      console.log(`valid: ${valid}`, `user: ${user}`);

      if (!valid || !user) {
        return { success: false };
      }

      //TODO Add logic to actually like product
      return { success: true };
    },
  },
};
