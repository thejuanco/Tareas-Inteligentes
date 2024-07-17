//Modelos de los Projectos
import { Sequelize } from "sequelize";
import { db } from "../database/db.js";

const Projectos = db.define("Projects", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.String
    },
    description: {
        type: DataTypes.String
    }
})