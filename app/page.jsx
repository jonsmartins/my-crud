import Link from "next/link"
import styles from '@/styles/Page.module.css'

const Home = () => {
  return (
    <div className={styles.navegacao}>
        <Link href='/cadastro'>Cadastrar Usuario</Link>
        <Link href='/users'>Listar Usuarios</Link>
    </div>
  )
}

export default Home