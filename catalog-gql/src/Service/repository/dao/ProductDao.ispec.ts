import { ProductDao } from "./ProductDao";

describe("Product Dao", () => {
  it("Should list all of the products in the db", async () => {
    const products = await ProductDao.list({});
    expect(products).toEqual([
      {
        brandId: null,
        id: 1,
        name: "Some name 1"
      },
      {
        brandId: null,
        id: 2,
        name: "Some name 2"
      }
    ]);
  });
});
