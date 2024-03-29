import { cookies } from 'next/headers'
import Link from 'next/link'

export async function Navlink() {
  const token = cookies().get('token') as { name: string; value: string }

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
  })
  const data = await response.json()

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li className="submenu">
        <span>Produtos {'>'}</span>
        <ul>
          <li>
            <Link href="/produtos/server">Server</Link>
          </li>
          <li>
            <Link href="/produtos/client">Client</Link>
          </li>
          <li>
            <Link href="/produtos/adicionar">Adicionar</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        {data.autorizado ? (
          <span>{data.usuario}</span>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
    </ul>
  )
}
