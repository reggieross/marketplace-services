import { ApolloServer, gql } from 'apollo-server-lambda';

import { resolvers } from './resolvers';
import { context } from './context';
import * as fs from 'fs';
import * as path from 'path';
import { buildSubgraphSchema } from '@apollo/federation';

const schema = fs.readFileSync(
  path.join(__dirname, '../../schema.graphql'),
  'utf8'
);
const typeDefs = gql`
  ${schema}
`;

let federatedSchema = buildSubgraphSchema([
  {
    typeDefs,
    resolvers,
  },
]);

/**
 * For some reason the types are off here and we are getting an
 * error for now we are just going to ignore the error
 */

//@ts-ignore
export const server = new ApolloServer({
  schema: federatedSchema,
  context,
  introspection: true,
});
