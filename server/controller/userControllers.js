import User from "../models/User.js";
import { generateId } from "../helpers/token.js";

export const registerUser = async (req, res) => {
  try {
    // Obteniendo los datos del body
    const { name, lastName, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      console.log("User already exists");
      return;
    }

    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
      token: generateId(),
    });

    console.log(`Se creo al usuario: ${newUser}`);

    res.json({ name: newUser.name, lastName: newUser.lastName });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const confirmAccount = async (req, res) => {
  // Implementación para confirmar la cuenta del usuario
  const { token } = req.params;

  const user = await User.findOne({ where: { token } });

  if (!user) {
    console.log("Token invalido");
    return;
  }

  //Confirmar la cuenta del usuario
  user.token = null;
  user.confirmado = true;
  await user.save();
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser) {
      console.log("User not found");
      return;
    }

    if (!emailUser.authPassword(password)) {
      console.log("Password incorrect");
      return;
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const test = async (req, res) => {};
