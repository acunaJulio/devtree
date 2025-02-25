import express, { Router } from "express"
import {body} from 'express-validator'
import { createAccount, login } from "./handlers"
import { ExpressValidator } from "express-validator"
import { handleValidationErrors } from "./middleware/validation"

const router : Router = express.Router()


router.post('/auth/register', 
    body('handle')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'), 
    body('name')
    .notEmpty()
    .withMessage('El nombre del usuario es requerido'), 
    body('email')
    .isEmail()
    .withMessage('Email no valido'), 
    body('password')
    .isLength({min: 8})
    .notEmpty()
    .withMessage('El password es requerido'),
    handleValidationErrors,
    createAccount)

 
    router.post('/auth/login',
        body('email')
            .isEmail()
            .withMessage('Email no valido'), 
        body('password')
            .isLength({min: 8})
            .notEmpty()
            .withMessage('El password es obligatorio'),
            handleValidationErrors,
        login)

export default router
