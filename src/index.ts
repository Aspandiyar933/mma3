import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { AppDataSource } from './db/data-source';
import { FighterResolver } from './resolvers/FighterResolver';
import { EventResolver } from './resolvers/EventResolver';
import { FightResolver } from './resolvers/FightResolver';

const startServer = async () => {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [FighterResolver, EventResolver, FightResolver],
    validate: false,
  });

  const app = express();
  app.use(
    cors({
      origin: ['https://mma2.vercel.app'], // Allow your frontend origin
      credentials: true, // Enable cookies and headers if needed
    })
  );
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((error) => console.error(error));
