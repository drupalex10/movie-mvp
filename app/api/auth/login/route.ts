import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
 
  return NextResponse.json({
    user: "okok"
  })
}

export async function POST(request: Request) {
 
  return NextResponse.json({
    user: "oko12222k"
  })
}