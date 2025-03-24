"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const Fighter_1 = require("../entities/Fighter");
const Event_1 = require("../entities/Event");
const Fight_1 = require("../entities/Fight");
const Ranking_1 = require("../entities/Ranking");
(0, dotenv_1.config)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL_2,
    entities: [Fighter_1.Fighter, Event_1.Event, Fight_1.Fight, Ranking_1.Ranking],
    synchronize: true,
    logging: true,
});
