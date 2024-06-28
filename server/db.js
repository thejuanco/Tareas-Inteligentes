//Establecer conexion con la base de datos
import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pcv1433x$',
    database: 'db_task',
    port: 3306
})