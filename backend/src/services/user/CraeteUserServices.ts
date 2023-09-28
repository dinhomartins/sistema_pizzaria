import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorreto");
    }

    // verificar se esse email ja esta cadastrado na plataforma

   const userAalreadyExists = await prismaClient.user.findFirst({
    where:{
        email: email
    }
   })

   if(userAalreadyExists){
    throw new Error("email cadastrado no sistema")
   }
   // pega a senha e criptografa
   const passwordHash = await hash(password, 8)

   const user = await prismaClient.user.create({
    data:{
        name: name,
        email: email, 
        password: passwordHash
    },
    select:{
        id: true,
        email: true,
        name: true
    }
   })

   
  }
}

export { CreateUserService };
