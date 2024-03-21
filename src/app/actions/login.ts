'use server'

import { cookies } from 'next/headers'

const BASE_URL = 'https://api.origamid.online/conta'

export async function loginAction(username: string, password: string) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const { token } = await response.json()

    cookies().set('token', token, {
      secure: true,
      httpOnly: true,
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
