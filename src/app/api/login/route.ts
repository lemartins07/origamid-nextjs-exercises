import { log } from 'console'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const BASE_URL = 'https://api.origamid.online/conta'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = (await request.json()) as {
      username: string
      password: string
    }

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

    if (!response.ok) {
      return Response.json({
        status: response.status,
        statusText: response.statusText,
      })
    }

    const { token } = await response.json()

    cookies().set('token', token, {
      secure: true,
      httpOnly: true,
    })

    return Response.json({
      status: response.status,
      statusText: response.statusText,
    })
  } catch (error) {
    log(error)
    return Response.json({ ok: false, error })
  }
}
