//Modelo de usuarios
import { DataTypes, UUIDV4 } from 'sequelize'
import { db } from '../database/db.js'

const User = db.define(
    'User',
    {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING
        }
    }
)

await User.sync() // Crea la tabla de usuarios si no existe

export default User