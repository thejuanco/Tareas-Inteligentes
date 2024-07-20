//Modelo de los espacios de trabajo
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const Workspaces = db.define("Workspaces", {
    workspaceId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

await Workspaces.sync()

export default Workspaces;