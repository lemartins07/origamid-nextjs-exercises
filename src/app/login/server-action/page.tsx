'use client'

import { loginAction } from '@/app/actions/login'
import Cookies from '@/components/Cookies'
import { FormEvent, useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await loginAction(username, password)

    console.log(response)
    if (response) {
      setError('')
    } else {
      setError('Usuário ou senha inválidos.')
    }
  }

  return (
    <main>
      <Cookies />
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="error">{error}</span>
        <button type="submit">Sign In</button>
      </form>
    </main>
  )
}
