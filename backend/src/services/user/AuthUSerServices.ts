import prismaClient from "../../prisma";
import { compare } from "bcryptjs";


interface AuthRequest{
    email: string;
    password: string;
}

class AutfUserService{
    async execute({email, password }: AuthRequest){
        // verificar se email exist

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Usuario incorreto")
        }

        //verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("Senha incorreta")
        }

        


        return {ok: true}
    }
}

    export  {AutfUserService}