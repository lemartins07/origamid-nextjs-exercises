'use server'

import { cookies } from 'next/headers'

export async function GetCookie(key: string) {
  const cookie = cookies().get(key) || ''
  console.log(cookie)

  return cookie
}
