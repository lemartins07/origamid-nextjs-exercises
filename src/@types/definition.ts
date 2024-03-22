export interface Curso {
  id: number
  slug: string
  nome: string
  descricao: string
  total_aulas: number
  total_horas: number
}

export interface Aula {
  id: number
  slug: string
  nome: string
  descricao: string
  curso_id: number
  tempo: number
  ordem: number
}

export type Produto = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: 0 | 1
}
