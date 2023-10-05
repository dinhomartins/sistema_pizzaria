import { Request, Response } from "express";

import { CreateProductServices } from "../../services/product/CreateProductServices";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, banner, description, category_id } = req.body;

    if(!req.file){
      throw new Error("erro upload de imagem")
    }else{

      const { originalname, filename: banner } = req.file;


      const createProductServices = new CreateProductServices();

      const product = await createProductServices.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });
  
      return res.json(product);
    }


  }
}

export { CreateProductController };
