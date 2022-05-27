import { Router, json, urlencoded, Request, Response } from "express";
import Helmet from 'helmet'
import session from "./config/session";
import { errorHandler, notFound } from "./app/middleware/errorHandler";
import responder from "./app/middleware/responder";
import controller from "./controller";

import UserRoutes from './modules/User/user.routes'

const router = Router()

// Dependencies
router.use(Helmet())
router.use(json())
router.use(urlencoded({extended : true}))
router.use(session)
router.use(responder)

// ROUTES
router.use('/user', UserRoutes)
router.get('/',controller.home)
router.get('/error',controller.error)


// Error Handling
router.use(notFound)
router.use(errorHandler)


export default router