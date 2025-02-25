import type { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from '../config/utils/auth'
import { checkPassword } from '../config/utils/auth'

export const createAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email })
        if (userExists) {
            res.status(409).json({ error: 'Un usuario con ese mail ya está registrado' })
            return
        }

        // Generar un handle único
        const handle = slug(req.body.handle, '')
        const handleExists = await User.findOne({ handle })
        if (handleExists) {
            res.status(409).json({ error: 'Nombre de usuario no disponible' })
            return
        }

        // Crear usuario
        const user = new User(req.body)
        user.password = await hashPassword(password)
        user.handle = handle

        await user.save()
        res.status(201).json({ message: 'Registro Creado Correctamente' })
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' })
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        // Manejar errores de validación
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
            return
        }

        const { email, password } = req.body

        // Revisar si el usuario está registrado
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ error: 'El Usuario no existe' })
            return
        }

        // Comprobar el password
        const isPasswordCorrect = await checkPassword(password, user.password)
        if (!isPasswordCorrect) {
            res.status(401).json({ error: 'Password Incorrecto' })
            return
        }

        // Respuesta exitosa
        res.status(200).json({ message: 'Login exitoso', user })
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' })
    }
}