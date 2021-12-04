import { ProductDao } from './repository/dao/ProductDao';
import { BrandDao } from './repository/dao/BrandDao';
import { PriceDao } from './repository/dao/PriceDao';
import { CatalogService } from './CatalogService';

describe('Catalog Service', () => {
  const service = new CatalogService({});
  it('Should get products for a specific user', async () => {
    const expectedRes = [
      {
        id: '1',
        name: 'some-product',
        brandId: 'some-brand',
      },
    ];

    const spy = jest.spyOn(ProductDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await service.getProductsForUser({});

    expect(spy).toBeCalledWith({});
    expect(res).toEqual(expectedRes);
  });

  it('Should get all brands', async () => {
    const expectedRes = [
      {
        id: '1',
        name: 'Brand name',
      },
    ];
    const spy = jest.spyOn(BrandDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await service.getBrands();

    expect(res).toEqual(expectedRes);
  });

  it('Should get prices for a specific product', async () => {
    const expectedRes = [
      {
        amount: 120.0,
        url: 'http://www.somesite.com',
        site: 'somesite',
        currency: 'USD',
      },
    ];
    const spy = jest.spyOn(PriceDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await service.getPricesForProduct(1);

    expect(spy).toBeCalledWith({ filters: { productIds: ['1'] } });
    expect(res).toEqual(expectedRes);
  });
});
