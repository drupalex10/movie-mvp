import { checkUserAlreadyExits, createUser } from '@/prisma/controllers/auth';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
 
  return NextResponse.json({
    user: "okok"
  })
}

export async function POST(request: Request) {
    try {
      const res = await request.json()
      const emailAlreadyExits = await checkUserAlreadyExits(res.email);
      
      if (emailAlreadyExits) throw new Error("Email is already exits");
      if (!res?.email) throw new Error("Email is required");
      if (!res?.password) throw new Error("Password is required");
      
      const user = await createUser({
          password: res.password,
          email: res.email,
          firstName: res?.fullName
      });
      
      return NextResponse.json({data: {...user}})
    } catch (error: any) {
      return NextResponse.json({
        errors: {
          message: error.message
        },
      })
    }
}