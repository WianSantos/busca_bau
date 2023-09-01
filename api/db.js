import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Wiansantos@1',
    database: 'bau'
});

