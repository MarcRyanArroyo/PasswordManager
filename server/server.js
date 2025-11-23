require("dotenv").config();
import oExpress from 'express';
import oBodyParser from 'body-parser';
import cors from 'cors';
import oLoginRoute from './routes/LoginRoute.js';
import initializeDatabase from './models/DatabaseMigration';

const oApp = oExpress();
oApp.use(cors());
oApp.use(oBodyParser.json());

oApp.use("/api", oLoginRoute);

// Connect to the database before starting the server
initializeDatabase().then((database) => {
    db = database;
    console.log('Connected to SQLite database.');

  // Start the Express server after database connection is established
    oApp.listen(process.env.PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit if database connection fails
});