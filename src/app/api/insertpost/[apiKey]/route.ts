import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
type Params = {
    params: { apiKey : string }
}

export async function POST(req : Request, { params } : Params) {
    let wasInserted = false;
    if(params.apiKey == process.env.API_KEY){
        try {
            
            const bodyRequest = await req.json();
            const response = await prisma.posts.create({
                data: bodyRequest
            });
            wasInserted = true;
            return Response.json({ 
                sucess: wasInserted,
                message: "Inserido com sucesso", 
                response
            });
        }catch(exception : any){
            return Response.json({
                sucess: wasInserted,
                message: "Ocorreu um erro ao inserir.",
                response: exception
            });
        }
    }
}