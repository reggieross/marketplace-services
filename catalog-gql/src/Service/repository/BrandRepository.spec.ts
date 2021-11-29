import {BrandDao} from "./dao/BrandDao";
import {BrandRepository} from "./BrandRepository";

describe('Brand Repo', () => {
  it('Should return brands', async () => {
    const expectedRes = [
      {
        id: '1',
        name: 'Brand name',
      },
    ];
    const spy = jest.spyOn(BrandDao, 'list');
    spy.mockResolvedValue(expectedRes);

    const res = await BrandRepository.getBrands();

    expect(res).toEqual(expectedRes);
  });
});
