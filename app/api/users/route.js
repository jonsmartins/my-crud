import { getUsers, createUser, deleteUser } from "@/app/services/userService";
import { validateUser } from "@/app/utils/userUtils";

//endpoint q lista usuarios
export const GET = async (req, res) => {
    const users = await getUsers()
    return new Response(JSON.stringify(users), { status: 200 })
}

//endpoint q cria usuarios
export const POST = async (req, res) => {
    const user = await req.json();
    console.log(user)
    try {
        //validacoes
        validateUser(user);
        // logica para inserir no banco de dados
        await createUser(user);
        return new Response(JSON.stringify(user), {status: 201});
    } catch(e) {
        return new Response( JSON.stringify({error: e.message}) , {status: 400})
    }
}

//endpoint que atualiza usuario
export const PUT =(req, res) => {
    return new Response( 'Ainda nao implementado' , {status: 404})
}

export const DELETE = async (req, res) => {
    const idUser = await req.json();
    try {
        await deleteUser(idUser);
        return new Response('Usuario deletado com sucesso', { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({error: e.message}) , {status: 400})   
    }
}