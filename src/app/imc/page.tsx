'use client'

import { useState } from 'react'

export default function IMCPage() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('')

  function handleClick() {
    const alturaMetro = Number(altura) / 100
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)
    setImc(total)
  }

  return (
    <main>
      <h1>IMC: {imc}</h1>
      <form>
        <input
          type="number"
          name="altura"
          placeholder="Insira sua altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="number"
          name="peso"
          placeholder="Insira seu peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Calcular
        </button>
      </form>
    </main>
  )
}
