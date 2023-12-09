'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "./Input"
import Button from "./Button"

// A ser resolvido.

/*
    Principais problemas:

        * Como executar uma query do Prisma em um client component (qualquer operação de CRUD)
        * Como obter um resultado do banco usando o Prisma
        * Como resolver problemas de variaveis de ambiente do Prisma com o Next.js
*/

export default () => {
    const router = useRouter();
    const [author, setAuthor] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [post, setPost] = useState('')

    function clear(){
        setAuthor('');
        setPostTitle('');
        setPost('');
    }

    async function createPost(){
        try {
            // Código de chamada para a API
            const response = await fetch(`http://localhost:3000/api/insertpost/api_teste`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Allowed': 'application/json'
                },
                body: JSON.stringify({ username: author, title: postTitle, post })
            });

            const inserted = await response.json();
            if(inserted.sucess){
                console.log('Funcionou!');
            }else{
                console.log('Não funcionou!: ', inserted);
            }
        }catch(exception : any){
            console.log('Ocorreu um erro: ', exception);
        }
    }

    return (
        <div>
            <li>
                Escreva e crie seus posts nesta página.
            </li>
            <br/>
            <Input type="text" setter={setAuthor} value={author} label="Autor"/>
            <Input type="text" setter={setPostTitle} value={postTitle} label="Titulo do post"/>
            <Input type="textarea" setter={setPost} value={post} placeholder="Escreva seu post aqui!"/>
            <div className="flex">
                <Button callback={createPost}> Criar post </Button>
                <Button callback={clear}> Limpar </Button>
            </div>
        </div>
    )
}