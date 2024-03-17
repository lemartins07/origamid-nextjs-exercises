import Link from 'next/link'

export function Navlink() {
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
            <Link href="/server-produtos">Server Produtos</Link>
          </li>
          <li>
            <Link href="/client-produtos">Client Produtos</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </ul>
  )
}
