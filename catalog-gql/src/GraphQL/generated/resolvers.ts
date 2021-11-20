import { GraphQLResolveInfo } from 'graphql';
import { Product, Brand, Price } from '../../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Brand = {
  __typename?: 'Brand';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  product: Array<Product>;
};

export type CatalogMutationResponse = {
  __typename?: 'CatalogMutationResponse';
  likeProduct?: Maybe<LikeProductResponse>;
};

export type CatalogMutationResponseLikeProductArgs = {
  input?: InputMaybe<LikeProductInput>;
};

export enum Limit {
  Fifty = 'FIFTY',
  OneHundred = 'ONE_HUNDRED',
  FiveHundred = 'FIVE_HUNDRED',
}

export type LikeProductInput = {
  productId: Scalars['String'];
  liked: Scalars['Boolean'];
};

export type LikeProductResponse = {
  __typename?: 'LikeProductResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  catalog: CatalogMutationResponse;
};

export type PaginationInput = {
  limit: Limit;
  page: Scalars['Int'];
};

export type Price = {
  __typename?: 'Price';
  amount?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  Brand: Array<Brand>;
  Price: Array<Price>;
};

export type ProductFilters = {
  __typename?: 'ProductFilters';
  total?: Maybe<Scalars['Int']>;
  brand: Array<Brand>;
};

export type ProductFiltersInput = {
  brandIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  products: Array<Product>;
  filters: ProductFilters;
};

export type ProductResponseProductsArgs = {
  input?: InputMaybe<ProductsInput>;
};

export type ProductsInput = {
  pageInfo?: InputMaybe<PaginationInput>;
  filters?: InputMaybe<ProductFiltersInput>;
};

export type Query = {
  __typename?: 'Query';
  catalog: ProductResponse;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Service = 'SERVICE',
  Unknown = 'UNKNOWN',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Brand: ResolverTypeWrapper<Brand>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CatalogMutationResponse: ResolverTypeWrapper<CatalogMutationResponse>;
  LIMIT: Limit;
  LikeProductInput: LikeProductInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  LikeProductResponse: ResolverTypeWrapper<LikeProductResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: PaginationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Price: ResolverTypeWrapper<Price>;
  Product: ResolverTypeWrapper<Product>;
  ProductFilters: ResolverTypeWrapper<
    Omit<ProductFilters, 'brand'> & { brand: Array<ResolversTypes['Brand']> }
  >;
  ProductFiltersInput: ProductFiltersInput;
  ProductResponse: ResolverTypeWrapper<
    Omit<ProductResponse, 'products' | 'filters'> & {
      products: Array<ResolversTypes['Product']>;
      filters: ResolversTypes['ProductFilters'];
    }
  >;
  ProductsInput: ProductsInput;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Brand: Brand;
  String: Scalars['String'];
  CatalogMutationResponse: CatalogMutationResponse;
  LikeProductInput: LikeProductInput;
  Boolean: Scalars['Boolean'];
  LikeProductResponse: LikeProductResponse;
  Mutation: {};
  PaginationInput: PaginationInput;
  Int: Scalars['Int'];
  Price: Price;
  Product: Product;
  ProductFilters: Omit<ProductFilters, 'brand'> & {
    brand: Array<ResolversParentTypes['Brand']>;
  };
  ProductFiltersInput: ProductFiltersInput;
  ProductResponse: Omit<ProductResponse, 'products' | 'filters'> & {
    products: Array<ResolversParentTypes['Product']>;
    filters: ResolversParentTypes['ProductFilters'];
  };
  ProductsInput: ProductsInput;
  Query: {};
};

export type AuthDirectiveArgs = { requires?: Maybe<Role> };

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AuthDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BrandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']
> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CatalogMutationResponse'] = ResolversParentTypes['CatalogMutationResponse']
> = {
  likeProduct?: Resolver<
    Maybe<ResolversTypes['LikeProductResponse']>,
    ParentType,
    ContextType,
    RequireFields<CatalogMutationResponseLikeProductArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeProductResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LikeProductResponse'] = ResolversParentTypes['LikeProductResponse']
> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  catalog?: Resolver<
    ResolversTypes['CatalogMutationResponse'],
    ParentType,
    ContextType
  >;
};

export type PriceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']
> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  Price?: Resolver<Array<ResolversTypes['Price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductFiltersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductFilters'] = ResolversParentTypes['ProductFilters']
> = {
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  brand?: Resolver<Array<ResolversTypes['Brand']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductResponse'] = ResolversParentTypes['ProductResponse']
> = {
  products?: Resolver<
    Array<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<ProductResponseProductsArgs, never>
  >;
  filters?: Resolver<ResolversTypes['ProductFilters'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  catalog?: Resolver<
    ResolversTypes['ProductResponse'],
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Brand?: BrandResolvers<ContextType>;
  CatalogMutationResponse?: CatalogMutationResponseResolvers<ContextType>;
  LikeProductResponse?: LikeProductResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductFilters?: ProductFiltersResolvers<ContextType>;
  ProductResponse?: ProductResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> =
  DirectiveResolvers<ContextType>;