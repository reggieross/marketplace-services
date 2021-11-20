import { ProductDao } from './dao/ProductDao';
import { ProductRepository } from './ProductRepository';

describe('Product Repo', () => {
  it('Should return all products for a specific user if no filters are present', async () => {
    const expectedRes = [
      {
        id: '1',
        name: 'some-product',
        brandId: 'some-brand',
      },
    ];

    const spy = jest.spyOn(ProductDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await ProductRepository.getProductsForUser({});

    expect(spy).toBeCalledWith({});
    expect(res).toEqual(expectedRes);
  });
});
