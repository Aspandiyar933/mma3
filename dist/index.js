"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const data_source_1 = require("./db/data-source");
const FighterResolver_1 = require("./resolvers/FighterResolver");
const EventResolver_1 = require("./resolvers/EventResolver");
const FightResolver_1 = require("./resolvers/FightResolver");
const startServer = async () => {
    await data_source_1.AppDataSource.initialize();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [FighterResolver_1.FighterResolver, EventResolver_1.EventResolver, FightResolver_1.FightResolver],
        validate: false,
    });
    const app = (0, express_1.default)();
    const server = new apollo_server_express_1.ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app });
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
    });
};
startServer().catch((error) => console.error(error));
