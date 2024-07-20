//Modelos de los Projectos
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const Projects = db.define("Projects", {
    projectsId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255)
    },
    description: {
        type: DataTypes.TEXT
    }
})

await Projects.sync();

export default Projects