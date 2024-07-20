//Archivo para las relaciones con la base de datos
import User from "./User.js";
import Projects from "./Projects.js";
import Tasks from "./Tasks.js";
import Workspaces from "./Workspaces.js";
import User_Workspaces from "./User_Workspaces.js";

//Definiendo las relaciones

//Usuarios y los Espacios de Trabajo
User.hasMany(Tasks, {foreignKey: "tasksId"})
Workspaces.belongsTo(User, {foreignKey: "userId", as: "creator"})

//Espacios de trabajo y Proyectos
Workspaces.hasMany(Projects, {foreignKey: "workspaceId"})
Projects.belongsTo(Workspaces, {foreignKey: "workspaceId"})

//Proyectos y Tareas
Projects.hasMany(Tasks, {foreignKey: "projectId"})
Tasks.belongsTo(Projects, {foreignKey: "projectId"})

//Tareas y Usuarios
User.hasMany(Tasks, {foreignKey: "taskId"})
Tasks.belongsTo(User, {foreignKey: "taskId"})

//User_Workspaces para la relación muchos a muchos entre User y Workspace
User.belongsTo(Workspaces, {foreignKey: "userId"})
Workspaces.belongsToMany(User, {foreignKey: "workspaceId"})


export { User, Projects, Tasks, Workspaces, User_Workspaces }