import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Fighter } from '../entities/Fighter';
import { Event } from '../entities/Event';
import { Fight } from '../entities/Fight';
import { Ranking } from '../entities/Ranking';
config();
export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL_2,
    entities: [Fighter, Event, Fight, Ranking],
    synchronize: true,
    logging: true,
});
