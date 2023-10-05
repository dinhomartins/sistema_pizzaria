import {Request, Response} from 'express'
import { CreateCategoryServices } from '../../services/category/CreateCategoryServices'

class CreateCategoryController{
    async handle(req: Request, res:Response){
        // passando nome para o serviço
        const { name } = req.body;

        const createCategoryServices = new CreateCategoryServices();

        const category = await createCategoryServices.execute({
            //passando nome da categoria para os serviço
            name
        });

        return res.json(category);

    }
}

export { CreateCategoryController }