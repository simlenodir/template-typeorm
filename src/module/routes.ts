import { Router } from "express";
import upload from "../utils/malter";
import { login, loginUserRegister, usersAuth } from "./users";

const routes = Router()

export default routes
    routes.post('/auth', upload.single('user_img'), usersAuth)
    routes.post('/auth-login', loginUserRegister)
    routes.post('/login', login)
    routes.post('/login', login)