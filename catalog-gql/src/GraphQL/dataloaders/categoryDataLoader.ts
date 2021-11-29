import * as DataLoader from 'dataloader';
import {Brand} from "../../types";

export const categoryDataLoader = (xToken: string) => {
  return new DataLoader(
    async (ids: string[]) => {
      const category: Brand[] = [{
        id: 'some-id',
        name: 'some-name',
      }];
      return ids.map(id => category);
    },
    {
      maxBatchSize: 1000,
    }
  );
};