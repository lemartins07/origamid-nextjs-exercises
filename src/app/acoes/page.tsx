import { Atualizar } from '@/components/Atualizar'

type Acao = {
  atualizada: string
  descricao: string
  id: number
  nome: string
  preco: number
  preco_anterior: number
  simbolo: string
  venda: number
}

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua')
  const acao = (await response.json()) as Acao

  console.log(acao)

  return (
    <main>
      <h1>Açoes</h1>
      <Atualizar />
      <p>
        <strong>Nome: </strong>
        {acao.nome}
      </p>
      <p>
        <strong>Preço: </strong> {acao.preco}
      </p>
      <p>
        <strong>Atualiado: </strong> {acao.atualizada}
      </p>
    </main>
  )
}
