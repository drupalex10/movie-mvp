import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateUserInput {
  email: string;
  password: string;
  firstName: string;
}


export const createUser = async (data: CreateUserInput) => {
  try {
    const user = await prisma.user.create({data});
    return user;
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const checkUserAlreadyExits = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });
    
    return user;
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}