'use client'
import styles from '@/styles/Cadastro.module.css'
import Link from 'next/link';
import { useState } from 'react'

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function isFormValid() {
    //logica para validar formulario ...
    return true;
  }

  function submitForm() {
    const createUser = async () => {
      const user = { nome, email, senha };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      };
      const res = await fetch('/api/users', requestOptions);

      if (res.status == 201) {
        alert('usuario criado com sucesso')
      } else {
        alert('Erro ao criar usuario')
      }
    }
    if (isFormValid()) createUser();
  }
  return (
    <div className={styles.container}>
      <Link href='/'>Voltar</Link>
      <form className={styles.user}>
        <h3>Digite seus dados !</h3>
        <input
          type="text"
          placeholder='Digite seu nome'
          onChange={(e) => {
            setNome(e.target.value)
          }}
          required
        />
        <input
          type="email"
          placeholder='Digite seu email'
          onChange={(e) => { setEmail(e.target.value) }}
          required
        />
        <input
          type="password"
          placeholder='Digite sua senha'
          onChange={(e) => { setSenha(e.target.value) }}
          required
        />
        <button onClick={submitForm}>Cadastrar</button>
      </form>
    </div>
  )
}