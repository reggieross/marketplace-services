import {createWhere} from "./CreateWhereClause";

describe('Create Select', () => {
    it('generate basic select statement for table', async () => {
        const sql = await createWhere('product', {
            brandIds: ['some-id']
        });
        expect(sql).toEqual('Where product.brand_id in ($(brandIds:csv))');
    });
})