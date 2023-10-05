import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string;
  password: string;
}

class AutfUserService {
  async execute({ email, password }: AuthRequest) {
    // verificar se email exist

    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Usuario incorreto");
    }

    //verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }


    // gerar um token JWT e devolvar os dados do usuario como id, name e email
    const token = sign(
      {
      name: user.name,
      email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )


    return { 
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    };
  }
}

export { AutfUserService };
