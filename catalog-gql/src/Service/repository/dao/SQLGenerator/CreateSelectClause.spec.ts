import {createSelect} from "./CreateSelectClause";

describe('Create Select', () => {
    it('generate basic select statement for table', async () => {
        const sql = await createSelect('product', ['name']);
        expect(sql).toEqual('Select product.name from product');
    });
});