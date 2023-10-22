import { connectToDB } from "../database/db";
import User from "../models/user";

export const getUsers = async () => {
    console.log('Lendo Usuarios no banco')
    await connectToDB();
    const users = await User.find({});
    return users;
}

export const createUser = async (user) => {
    console.log('Criando Usuario')
    await connectToDB();
    const newUser = new User(user)
    await newUser.save();
    console.log('Usuario criado com sucesso!')
}

export const deleteUser = async (idUser) => {
    console.log('Excluindo Usuario')
    await connectToDB();
    await User.findOneAndDelete({email: idUser})
    console.log('Usuario deletado com sucesso!')
}