import User from '../models/User.js'

export const registerUser = async (req, res) => {
    try {
      // Obteniendo los datos del body
      const { name, lastName, email, password } = req.body;

      const userExists = await User.findOne({ email: email})

      if(userExists){
        console.log("User already exists")
        return
      }

      const newUser = await User.create({
        name,
        lastName,
        email,
        password,
      });

      console.log(`Se creo al usuario: ${newUser}`);

      res.json({name: newUser.name, lastName: newUser.lastName})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}
