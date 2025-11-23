import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async () => {
    const oDb = await open({
        filename: './mydatabase.db',
        driver: sqlite3.Database,
    });

    await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    `);

    return oDb;
}