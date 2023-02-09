import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Visitor } from './entities';
import { createVisitorTable1675909259708 } from './migrations';

const PORT = process.env.DB_PORT as number | undefined;

export const appDatasource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Visitor],
  migrations: [createVisitorTable1675909259708],
  // entities: [`${__dirname}/**/entities/*.{ts,js}`],
  // migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
