import ProductList from '@/components/ProductList'

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos')
  const data = await response.json()

  return (
    <main>
      <h1>Server Produtos</h1>
      <ProductList produtos={data} />
    </main>
  )
}
