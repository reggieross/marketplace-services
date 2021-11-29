import {createWhere} from "./CreateWhereClause";
import {TableName} from "./config/TableConfig";

describe('Create Select', () => {
    it('generate basic select statement for table', async () => {
        const sql = await createWhere(TableName.PRODUCT, {
            brandIds: ['some-id']
        });
        expect(sql).toEqual('Where product.brand_id in ($(brandIds:csv))');
    });
})