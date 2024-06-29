//Creando la instancia de la base de datos
import { Sequelize } from "sequelize";
import 'dotenv/config'

export const db = new Sequelize({
    database: 'tareas_inteligentes_db',
    username: 'Admin_TI',
    password: '123456789',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql' 
})