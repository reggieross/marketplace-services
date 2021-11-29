import {SQLGenerator} from './SQLGenerator';
import {Limit} from '../../../../GraphQL/generated/resolvers';
import {TableName} from "./config/TableConfig";

describe('SQL Generator', () => {
  it('generate basic select statement for table', async () => {
    const { query, queryInput } = await SQLGenerator.genSQL(TableName.PRODUCT, [
      'name',
    ]);
    expect(query).toEqual(
      'Select product.name from product Limit 50 offset 0;'
    );
    expect(queryInput).toEqual({});
  });

  it('generate where clause if filters are provided', async () => {
    const { query, queryInput } = await SQLGenerator.genSQL(
      TableName.PRODUCT,
      ['name'],
      {
        brandIds: ['some-brand'],
      }
    );
    expect(query).toEqual(
      'Select product.name from product Where product.brand_id in ($(brandIds:csv)) Limit 50 offset 0;'
    );
    expect(queryInput).toEqual({ brandIds: ['some-brand'] });
  });

  it('should generate where and correct page for filters', async () => {
    const { query, queryInput } = await SQLGenerator.genSQL(
        TableName.PRODUCT,
      ['name'],
      {
        brandIds: ['some-brand'],
      },
      {
        limit: Limit.FiveHundred,
        page: 2,
      }
    );
    expect(query).toEqual(
      'Select product.name from product Where product.brand_id in ($(brandIds:csv)) Limit 500 offset 500;'
    );
    expect(queryInput).toEqual({ brandIds: ['some-brand'] });
  });
});
