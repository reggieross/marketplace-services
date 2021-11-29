import { PriceDao } from './dao/PriceDao';
import { PriceRepository } from './PriceRepository';

describe('Price Repository', () => {
  it('Should return a list of all the prices for a product', async () => {
    const expectedRes = [
      {
        amount: '120.00',
        url: 'http://www.somesite.com',
        site: 'somesite',
        currency: 'USD',
      },
    ];
    const spy = jest.spyOn(PriceDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await PriceRepository.getPriceForProduct('some-id');

    expect(spy).toBeCalledWith({ filters: { productIds: ['some-id'] } });
    expect(res).toEqual(expectedRes);
  });
});
