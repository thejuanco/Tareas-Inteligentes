//Modelo de usuarios
import { DataTypes, UUIDV4 } from 'sequelize'
import { db } from '../database/db.js'
import bcrypt from 'bcrypt'

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
    },{
        hooks: {
            beforeCreate: async (user) => {
                user.password = await bcrypt.hash(user.password, 10)
            }
        }
    }
)

//Compara la contraseña
User.prototype.authPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

await User.sync() // Crea la tabla de usuarios si no existe

export default User