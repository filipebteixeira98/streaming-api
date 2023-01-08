import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import './utils/connection';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, () =>
    console.log('Server is running at http://localhost:4100')
  );
}

bootstrap();
