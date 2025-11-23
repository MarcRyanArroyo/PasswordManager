import dotenv from 'dotenv'
dotenv.config();
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export default async () => {
    const oDb = await open({
        filename: process.env.DB_PATH,
        driver: sqlite3.Database,
    });

    await oDb.exec(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
        );
    `);

    return oDb;
}