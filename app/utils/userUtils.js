export const validateUser = (user) => {
    if(!user.nome) throw new Error('O campo nome é obrigatório');
    if(!user.email) throw new Error('O campo email é obrigatório');
    if(!user.senha) throw new Error('O campo senha é obrigatório');
}
