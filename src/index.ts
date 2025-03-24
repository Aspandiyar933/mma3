import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db/data-source';
import { FighterResolver } from './resolvers/FighterResolver';
import { EventResolver } from './resolvers/EventResolver';
import { FightResolver } from './resolvers/FightResolver';

const main = async () => {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [FighterResolver, EventResolver, FightResolver],
    validate: false,
  });

  const app = express();

  // ✅ Enable CORS for the frontend
  app.use(
    cors({
      origin: ['https://mma2.vercel.app'],
      credentials: true,
    })
  );

  const server = new ApolloServer({ schema });

  await server.start();

  // ✅ Apply GraphQL endpoint
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
};

main().catch((err) => console.error(err));
