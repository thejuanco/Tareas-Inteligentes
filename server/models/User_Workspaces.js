//Modelo de los espacios de trabajo
import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

const User_Workspaces = db.define("User_Workspaces", {
    userWorkspacesId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Workspace_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    role_in_workspace: {
        type: DataTypes.ENUM('admin', 'member'),
        allowNull: false,
    }
})

await User_Workspaces.sync()

export default User_Workspaces