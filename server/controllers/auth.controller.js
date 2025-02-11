import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hashSync(password, 10)
    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword
    })
    try {
        await newUser.save()
        res.status(201).json("user created successfully")
    } catch (err) {
        next(err) 
    }
}