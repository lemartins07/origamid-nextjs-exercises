'use client'

import ProductList from '@/components/ProductList'
import { useEffect, useState } from 'react'

type Produto = {
  nome: string
  id: number
}

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('https://api.origamid.online/produtos')
      const data = (await response.json()) as Produto[]

      setProdutos(data)
    }

    fetchProdutos()
  }, [])

  return (
    <main>
      <h1>Client Produtos</h1>
      <ProductList produtos={produtos} />
    </main>
  )
}
