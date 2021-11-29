import {createSelect} from "./CreateSelectClause";
import {TableName} from "./config/TableConfig";

describe('Create Select', () => {
    it('generate basic select statement for table', async () => {
        const sql = await createSelect(TableName.PRODUCT, ['name']);
        expect(sql).toEqual('Select product.name from product');
    });
});