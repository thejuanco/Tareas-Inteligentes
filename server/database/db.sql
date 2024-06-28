-- CREATE DATABASE db_task;

-- Table of Users
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Table of Workspaces
CREATE TABLE Workspaces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES Users(id)
);

-- Table of Projects
CREATE TABLE Projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATETIME,
    end_date DATETIME,
    workspace_id INT,
    FOREIGN KEY (workspace_id) REFERENCES Workspaces(id)
);

-- Table of Tasks
CREATE TABLE Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    due_date DATETIME,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    assigned_to INT,
    project_id INT,
    FOREIGN KEY (assigned_to) REFERENCES Users(id),
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

-- Table of User-Workspaces
CREATE TABLE User_Workspaces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    workspace_id INT,
    role_in_workspace ENUM('admin', 'member') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (workspace_id) REFERENCES Workspaces(id)
);

-- Table of Ping
create table Ping(
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(20)
);