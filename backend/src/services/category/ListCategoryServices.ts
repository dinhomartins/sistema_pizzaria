import prismaClient from "../../prisma";

class ListCategoryServices {
  async execute() {
    // retornar todos os produtos cadastrados em categoria t  findMany-procura toods
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryServices };
