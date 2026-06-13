import { NextResponse, type NextRequest } from 'next/server'

// Maintenance mode is ON by default. To bring the site back online,
// set the env var MAINTENANCE_MODE=off in Vercel (Project → Settings →
// Environment Variables) and redeploy, or remove this file.
const MAINTENANCE_ON = process.env.MAINTENANCE_MODE !== 'off'

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_ON) return NextResponse.next()

  const { pathname } = request.nextUrl

  // Let the maintenance page itself render.
  if (pathname === '/maintenance') return NextResponse.next()

  // Rewrite everything else to the maintenance page (URL stays the same).
  const url = request.nextUrl.clone()
  url.pathname = '/maintenance'
  return NextResponse.rewrite(url, { status: 503 })
}

// Run on all routes except Next internals and static assets.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|.*\\.[\\w]+$).*)'],
}
