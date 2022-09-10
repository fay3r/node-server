import {Request, Response, NextFunction} from 'express'

export const logger = function (req:Request, res:Response, next:NextFunction) {
    console.info(req.method, '\t', req.path)
    console.info(`Called at: ${new Date().toISOString()}`)
    next()
}
