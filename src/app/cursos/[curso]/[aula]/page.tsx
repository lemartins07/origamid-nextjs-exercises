import { getAula } from '@/app/api/cursos/route'

type PageParams = {
  params: {
    curso: string
    aula: string
  }
}

export default async function AulaPage({ params }: PageParams) {
  const data = await getAula(params.curso, params.aula)
  return (
    <main>
      <h1>{data.nome}</h1>
      <p>
        <strong>Descrição: </strong>
        {data.descricao}
      </p>
      <p>
        <strong>Duração: </strong>
        {data.tempo}
      </p>
    </main>
  )
}
