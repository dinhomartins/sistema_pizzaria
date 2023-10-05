import prismaClient from "../../prisma";

// receber o nome da categoria
interface CategoryRequest {
  name: string;
}

class CreateCategoryServices {
    //pegar o nome e passar para o banco
  async execute({name }: CategoryRequest) {
// verifica se o nome está vazio
    if(name === ''){
        throw new Error('name invalido')
    }
// se não estiver vazio cadastrar no banco
    const category = await prismaClient.category.create({
        data:{
            name: name,
        },
        select:{
            id: true,
            name: true,
        }
    })
    return category;
  }
}

export { CreateCategoryServices };
