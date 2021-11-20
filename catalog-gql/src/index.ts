import { ENV } from './env';
import * as express from 'express';
import * as cors from 'cors';
import * as BodyParser from 'body-parser';
import { server } from './GraphQL';

console.log('Starting up!');

const app = express();
app.use(cors());
app.use(BodyParser());

app.use('/healthy', async (req, res) => {
  res.send({
    message: 'Catalog GQL Healthy',
  });
});

(async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ port: ENV.RUN_PORT }, () => {
    console.log(`listening at :${ENV.RUN_PORT}...`);
  });
})();
