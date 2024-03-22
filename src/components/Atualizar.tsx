'use client'

import { revalidatePathAction } from '@/app/actions/revalidate-path'
import { useEffect } from 'react'

export function Atualizar() {
  function handleClick() {
    revalidatePathAction('/acoes')
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      revalidatePathAction('/acoes')
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <button onClick={handleClick}>Atualizar</button>
}
