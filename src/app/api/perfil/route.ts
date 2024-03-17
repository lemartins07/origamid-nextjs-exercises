import { cookies } from 'next/headers'

const BASE_URL = 'https://api.origamid.online/conta'

export async function GET() {
  const token = cookies().get('token')
  const response = await fetch(`${BASE_URL}/perfil`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  return Response.json({
    status: response.status,
    statusText: response.statusText,
  })
}
