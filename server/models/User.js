import oDb from './DatabaseMigration.js';

export const saveUser = async(oUser) => {
    const sSaveUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
    await oDb.run(sSaveUserQuery,[oUser.username, oUser.password]);
};