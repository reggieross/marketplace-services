import {createPagination} from "./CreatePaginationClause";
import {Limit} from "../../../../GraphQL/generated/resolvers";

describe('Create Pagination Clause', () => {
    it('should limit the results to 50 if no pagination info is provided', () => {
        const sql = createPagination();
        expect(sql).toEqual('Limit 50 offset 0');
    });

    it('should limit the results base on information provided', () => {
        const sql = createPagination({limit: Limit.Fifty, page: 3});
        expect(sql).toEqual('Limit 50 offset 100');
    });

    it('should guard against negative page numbers', () => {
        const sql = createPagination({limit: Limit.Fifty, page: -3});
        expect(sql).toEqual('Limit 50 offset 0');
    });
})