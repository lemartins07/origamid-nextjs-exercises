'use client'

import { GetCookie } from '@/app/actions/get-cookie'
import { useState } from 'react'

export default function Cookies() {
  const [cookie, setCookie] = useState('')

  async function handleClick() {
    const token = (await GetCookie('token')) as {
      name: string
      value: 'string'
    }

    setCookie(token.value || 'not found')
  }

  return (
    <div>
      <h2>Cookie: {cookie} </h2>
      <button onClick={handleClick}>Pegar Cookie</button>
    </div>
  )
}
