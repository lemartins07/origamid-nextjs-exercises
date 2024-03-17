'use client'

import Link from 'next/link'

type Produto = {
  nome: string
  id: number
}

type ProductListProps = { produtos: Produto[] }

export default function ProductList({ produtos }: ProductListProps) {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <Link href={`/produto/${produto.id}`}>{produto.nome}</Link>
        </li>
      ))}
    </ul>
  )
}
