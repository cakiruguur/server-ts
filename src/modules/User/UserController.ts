import { RequestHandler } from "express";
import UserService from "./UserService";

class UserController {
    list: RequestHandler = async (_, res, next) => {
        try {
            const users = await UserService.list()
            res.success('Kullanıcı listesi',users)
            UserService.insert({})
        } catch (error) {
            next(error)
        }
    }

    insert: RequestHandler = async (req, res, next) => {
        try {
            const {name, email, password} = req.body
            const user = await UserService.insert({name,email,password})
            res.success('Kullanıcı kaydı başarılı', user)
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()