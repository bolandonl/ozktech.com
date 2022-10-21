import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiGithub, FiMail, FiMoon, FiSun } from 'react-icons/fi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' }
]

function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const { pathname } = useRouter()

  return (
    <header className="dark:bg-dark bg-cultured">
      <nav aria-label="Top">
        <div className="py-12 justify-between hidden lg:flex">
          <div className="items-center justify-start">
            <div className="hidden space-x-8 lg:flex">
              {navigation.map((link) => (
                <span
                  key={link.name}
                  className={`text-lg font-medium hover:text-richblack  dark:hover:text-slate-200 ${
                    pathname === link.href
                      ? 'font-bold text-richblack dark:text-slate-200'
                      : 'font-normal text-stone-700 dark:text-quicksilver'
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </span>
              ))}
            </div>
          </div>
          <div>
            <button type="button" className="mx-4">
              <a href="mailto:hello@ozktech.com" target="_blank" rel="noreferrer">
                <FiMail className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
              </a>
            </button>
            <button type="button" className="mx-4">
              <a href="https://github.com/bolandonl/ozktech.com" target="_blank" rel="noreferrer">
                <FiGithub className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
              </a>
            </button>
          </div>
          {/* <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            className="text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200 text-2xl items-center justify-end hidden lg:flex"
          >
            {resolvedTheme === 'light' ? <FiSun /> : <FiMoon />}
          </button> */}
        </div>
        <div className="flex py-12 flex-wrap justify-between space-x-6 lg:hidden">
          <div className="flex-wrap space-x-6">
            {navigation.map((link) => (
              <span
                key={link.name}
                className={`text-lg font-medium hover:text-richblack  dark:hover:text-slate-200 ${
                  pathname === link.href
                    ? 'font-bold text-richblack dark:text-slate-200'
                    : 'font-normal text-stone-700 dark:text-quicksilver'
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </span>
            ))}
          </div>
          <div>
            <button type="button" className="mx-4">
              <a href="mailto:hello@ozktech.com" target="_blank" rel="noreferrer">
                <FiMail className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
              </a>
            </button>
            <button type="button" className="mx-4">
              <a href="https://github.com/bolandonl/ozktech.com" target="_blank" rel="noreferrer">
                <FiGithub className="text-xl text-stone-700 hover:text-richblack dark:text-quicksilver  dark:hover:text-slate-200" />
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
