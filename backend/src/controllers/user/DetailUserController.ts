import {Request, Response } from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailuserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const detailUserServices = new DetailUserService();

        const user = await detailUserServices.execute(user_id);

        return res.json(user)
    }
}

export {DetailuserController}