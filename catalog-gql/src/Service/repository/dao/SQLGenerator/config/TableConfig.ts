export enum TableName {
  PRODUCT = 'product',
  BRAND = 'brand',
  PRICE = 'price',
}


export interface Table {
  name: string;
  propertyMapping: Record<string, string>;
}

export type TableConfig = Record<TableName, Table>

export const Tables: TableConfig = {
  [TableName.PRODUCT]: {
    name: 'product',
    propertyMapping: {
      id: 'id',
      brandId: 'brand_id',
      name: 'name',
    },
  },
  [TableName.BRAND]: {
    name: 'brand',
    propertyMapping: {
      id: 'id',
      name: 'name',
    },
  },
  [TableName.PRICE]: {
    name: 'price',
    propertyMapping: {
      id: 'id',
      amount: 'amount',
      currency: 'currency',
      site: 'site',
      productId: 'product_id'
    }
  }
};
