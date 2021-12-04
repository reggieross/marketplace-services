import * as DataLoader from 'dataloader';
import { TBrand } from '../../models/Brand';

export const categoryDataLoader = (xToken: string) => {
  return new DataLoader(
    async (ids: string[]) => {
      const category: TBrand[] = [
        {
          id: 'some-id',
          name: 'some-name',
        },
      ];
      return ids.map((id) => category);
    },
    {
      maxBatchSize: 1000,
    }
  );
};
