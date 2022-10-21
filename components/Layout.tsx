import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter()

  if (pathname === '/404') {
    return (
      <div className=" bg-cultured dark:bg-dark min-h-screen">
        <div className="max-w-full mx-auto px-8">
          <Header />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-8">
          <Footer />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto bg-cultured dark:bg-dark min-h-screen relative overflow-x-hidden">
      <div className="max-w-full mx-auto px-8">
        <Header />
        <div className="py-2">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
