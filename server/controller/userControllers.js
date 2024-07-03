import User from '../models/User.js'

export const loginUser = (req, res) => {
    return res.json({message: "Desde el login"})
}

export const registerUser = (req, res) => {
    return res.json({message: "Desde el registro"})

}

export const ping = async (req, res) => {
    res.json({message: 'Hola soy un ping'})

    const newUser = await User.create({
        name: 'John',
        lastName: 'Jara',
        email: 'john@gmail.com',
        password: 'password123',

    })

    const user1 = await User.findOne({where: {email: newUser.email}})

    try {
        if(user1){
            console.log(`El usuario: ${user1} ya existe`)
            return;
        } else {
            await newUser.save()
            console.log('Se guardo correctamente', newUser)
        }
    } catch (error) {
        console.log(error)
    }
}