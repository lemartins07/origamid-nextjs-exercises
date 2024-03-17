import { Aula, Curso } from '@/@types/definition'

export async function getCursos() {
  const response = await fetch('https://api.origamid.online/cursos')
  const data = (await response.json()) as Curso[]

  return data
}

export async function getCurso(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
  const data = (await response.json()) as Curso & {
    aulas: Aula[]
  }

  return data
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`,
  )
  const data = (await response.json()) as Aula

  return data
}
