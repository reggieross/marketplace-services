import { IMain, IDatabase } from "pg-promise";
import * as pgPromise from "pg-promise";
import { ENV } from "../../../env";

const pgp: IMain = pgPromise({
  // Initialization Options
});

let db;

export const getDB = (): IDatabase<any> => {
  if (!db) {
    db = pgp(ENV.POSTGRES_DATABASE_URL);
  }
  return db;
};
