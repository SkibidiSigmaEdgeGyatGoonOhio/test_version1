import 'server-only'

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { cache } from 'react'

const GetSession = cache(async () => {
  const session = await auth.api.getSession({headers: await headers()})
  return session
})

export default GetSession