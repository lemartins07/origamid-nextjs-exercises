'use client'

import { Produto } from '@/@types/definition'
import { adicionarProduto } from '@/app/actions/adicionar-produto'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function AdicionarPage() {
  const [formData, setFormData] = useState<Produto>({} as Produto)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target

    let newValue: string | number

    if (type === 'checkbox') {
      newValue = checked ? 1 : 0
    } else if (type === 'number') {
      newValue = Number(value)
    } else {
      newValue = value
    }

    console.log(name, newValue, type, checked)

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
    await adicionarProduto(formData)
  }

  return (
    <main>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
          value={formData.nome}
        />
        <input
          name="descricao"
          placeholder="Descrição"
          onChange={handleChange}
          value={formData.descricao}
        />
        <input
          name="preco"
          placeholder="Preço"
          type="number"
          onChange={handleChange}
          value={formData.preco}
        />
        <input
          name="estoque"
          placeholder="Estoque"
          type="number"
          onChange={handleChange}
          value={formData.estoque}
        />
        <label>
          <input
            name="importado"
            placeholder="importado"
            type="checkbox"
            onChange={handleChange}
            checked={!!formData.importado}
          />
          Importado
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </main>
  )
}
