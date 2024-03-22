'use server'

import { Produto } from '@/@types/definition'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function adicionarProduto(produto: Produto) {
  try {
    console.log(produto)

    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }

  revalidatePath('/produtos/server')
  redirect('/produtos/server')
}
