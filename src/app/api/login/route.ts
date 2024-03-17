import { log } from 'console'
import { NextRequest } from 'next/server'

const BASE_URL = 'https://api.origamid.online/conta'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const username = body.username
    const password = body.password

    const response = await fetch(`${BASE_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const data = response.json()

    return Response.json({ ok: true, body, data })
  } catch (error) {
    log(error)
    return Response.json({ ok: false, error })
  }
}
