import {Request, Response} from 'express';

export const healthCheckHandler = (req: Request, res: Response): void => {
    res.status(200).json({status: 'OK', timestamp: new Date().toISOString()});
};