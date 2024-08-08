//rutas para el usuario
import express from "express";

import {
  registerUser,
  loginUser,
  confirmAccount,
} from "../controller/userControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/confirm-account/:token", confirmAccount);
router.post("/login", loginUser);

router.get("/test", (req, res) => {
  res.json({
    message: "Soy la ruta del usuario",
  });
});

export default router;
