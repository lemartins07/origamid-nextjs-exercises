import { getCurso } from '@/app/api/cursos/route'
import Link from 'next/link'

type PageParams = {
  params: {
    curso: string
  }
}

export default async function Page({ params }: PageParams) {
  const curso = await getCurso(params.curso)

  return (
    <main>
      <h1>Curso: {curso.nome}</h1>

      <div>
        <p>
          <strong>Nome: </strong>
          {curso.nome}
        </p>
        <p>
          <strong>Descrição: </strong>
          {curso.descricao}
        </p>
        <p>
          <strong>Horas totais: </strong>
          {curso.total_horas}
        </p>
        {curso.aulas && (
          <p>
            <strong>Aulas: </strong>
            <ul>
              {curso.aulas.map((aula) => (
                <li key={aula.id}>
                  <Link href={`/cursos/${curso.slug}/${aula.slug}`}>
                    {aula.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </p>
        )}
        {curso.total_aulas && (
          <p>
            <strong>Total de aulas: </strong>
            {curso.total_aulas}
          </p>
        )}
      </div>
    </main>
  )
}
