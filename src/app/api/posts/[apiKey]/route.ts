import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

type Params = {
    params: { apiKey : string }
}

type Response = { message : string } | { 
    id : number,
    username : string,
    title : string,
    post : string
}[] | {
    id : number,
    username : string,
    title : string,
    post : string
} | null;

export async function GET(req : NextRequest, { params } : Params) {
    
    let data : Response = { message: "Chave invalida" };

    if(params.apiKey == process.env.API_KEY){
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get('id');
        let result : Response = [];
        if(id == null){
            result = await prisma.posts.findMany();
        }else{
            result = await prisma.posts.findUnique({
                where: {
                    id: Number(id)
                }
            })
        }
        
        data = result;
    }

    return Response.json(data)
}