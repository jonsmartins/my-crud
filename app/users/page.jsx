'use client'
import { useEffect, useState } from 'react'
import styles from '@/styles/Users.module.css'
import Link from 'next/link'

const UsersPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/api/users');
      const users = await res.json();
      setUsers(users);
    }
    getUsers()
  }, [])

  const excluirUser = (email) => {
    const idUser = email;
    const deleteUser = async () => {
       const requestOptions = {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(idUser)
       };
       const res = await fetch('/api/users', requestOptions);

       if (res.status == 200) {
         alert('usuario deletado com sucesso')
       } else {
         alert('Erro ao deletar usuario')
       }
    } 
     deleteUser();
  }

  return (
    <div className={styles.telaUsuario}>
      <Link href='/'>Voltar</Link>
      <div className={styles.listaUsuarios}>{
        users.map((user, index) => (
          <div key={index}>
            <span id={index}>Usuario: {user.nome}</span><span>Email: {user.email}</span>
            <button className={styles.editbtn}>Editar</button>
            <button className={styles.exclbtn} onClick={()=>excluirUser(user.email)}>Excluir</button>
          </div>
        ))
      }</div>
    </div>
  )
}

export default UsersPage