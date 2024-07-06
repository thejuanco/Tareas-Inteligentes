//Modelos de las tareas
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const Tasks = db.define("Tasks", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  due_date: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.ENUM("pendiente", "en progreso", "completado"),
    defaultValue: "pendiente",
    allowNull: false,
  }, 
  assigned_to: {
    type: DataTypes.UUID,
    references: { model: "Users", key: "id" },
    allowNull: false,
  },
  project_id: {
    type: DataTypes.UUID,
    //TODO: references: { model: "Projects", key: "id" },
    allowNull: false,
  }
  
});
