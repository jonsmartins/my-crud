import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD - Jonas Martins',
  description: 'Criado em nextjs app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mainBg'>
        Jonas Martins - CRUD
          <div className='mainView'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
