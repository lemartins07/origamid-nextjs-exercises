import Link from 'next/link'
import { getCursos } from '../api/cursos/route'

export default async function CursosPage() {
  const data = await getCursos()

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {data.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
