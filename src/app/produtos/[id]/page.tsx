type Produto = {
  id: number
  nome: string
  descricao: string
  preco: number
}

type PageParams = {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
    {
      next: {
        revalidate: 5,
      },
    },
  )

  const data = (await response.json()) as Produto

  return (
    <main>
      <h1>Detalhe Produto:</h1>
      <p>
        <strong>Nome:</strong> {data.nome}
      </p>
      <p>
        <strong>Preço:</strong> R$ {data.preco}
      </p>
      <p>
        <strong>Descrição:</strong> {data.descricao}
      </p>
    </main>
  )
}
