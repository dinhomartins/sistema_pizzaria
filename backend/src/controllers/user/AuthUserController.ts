import { Response, Request } from "express";
import { AutfUserService } from "../../services/user/AuthUSerServices";

class AutfUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authUserService = new AutfUserService();

        const auth = await authUserService.execute({
            email,
            password
        });

        return res.json(auth);
    }
}

export {AutfUserController}