import { RequestHandler } from "express";
import ApiError from "./app/errors/ApiError";

class Controller {
    home: RequestHandler =  (_, res) => {
        res.success('Başarılı')
    }

    error: RequestHandler = (req, res, next) => {
        next(new ApiError('selam',200))
    }
}

export default new Controller()