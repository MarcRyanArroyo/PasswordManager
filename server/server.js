import dotenv from 'dotenv'
dotenv.config();
import oExpress from 'express';
import oBodyParser from 'body-parser';
import cors from 'cors';
import oLoginRoute from './routes/LoginRoute.js';
import initializeDatabase from './models/DatabaseMigration.js';

const oApp = oExpress();
oApp.use(cors());
oApp.use(oBodyParser.json());

oApp.use("/api", oLoginRoute);

initializeDatabase().then((database) => {
    console.log('Connected to SQLite database.')
  // Start the Express server after database connection is established
    oApp.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit if database connection fails
});