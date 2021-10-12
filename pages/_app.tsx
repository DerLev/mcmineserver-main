import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config.json'
import ENV from '../env.json'
import StagingNote from '../components/StagingNote'
import LogoSvg from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import { MailIcon, ShieldCheckIcon, DocumentIcon } from '@heroicons/react/outline'
import CookieConsent from '../components/CookieConsent'
import { useRouter } from 'next/router'
import Script from 'next/script'

const NavLinks = [
  { title: 'Minecraft', href: '/minecraft' },
  { title: 'Discord', href: '/discord' },
  { title: 'Status', href: '/status' },
]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        dangerouslySetAllPagesToNoIndex={ENV.stagingEnv}
        dangerouslySetAllPagesToNoFollow={ENV.stagingEnv}
        {...SEO}
        openGraph={{
          url: process.env.rootUrl + router.route
        }}
      />
      <div className="flex flex-col items-stretch min-h-screen">
        <CookieConsent />
        {
          ENV.stagingEnv &&
          <StagingNote />
        }
        <nav className="flex-grow-0 bg-gray-800 text-white flex justify-center items-center px-4 font-display">
          <div className="flex max-w-7xl w-full py-2 justify-between items-center">
            <Link href="/">
              <a className="hover:bg-primary hover:bg-opacity-50 px-2 py-1 -mx-2 -my-1 rounded-lg transition">
                <h1 className="text-2xl flex items-center gap-1">
                  <Image src={LogoSvg} width={25} height={25} alt="McMineserver Logo" />
                  <span className="hidden sm:block">McMineserver</span>
                </h1>
              </a>
            </Link>
            <div className="flex gap-2">
              {
                NavLinks.map((link, i) => (
                  <Link href={link.href} key={i}>
                    <a className="bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-lg transition">
                      {link.title}
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
        </nav>
        <main className="flex-grow flex justify-center py-4 px-2">
          <div className="max-w-7xl w-full">
            <Component {...pageProps} />
          </div>
        </main>
        <footer className="flex-grow-0 flex justify-center items-center bg-gray-200 dark:bg-gray-800 text-gray-400 bg-opacity-50 font-display px-2">
          <div className="flex max-w-7xl w-full sm:justify-between items-center flex-col sm:flex-row">
            <div>
              <span>&copy; { moment().format('yyyy') } McMineserver</span>
            </div>
            <div className="flex justify-end items-center gap-3">
              <a href="mailto:instagram@mc-mineserver.de" className="flex justify-center items-center gap-1 hover:text-black dark:hover:text-white transition">
                <MailIcon className="w-4 h-4" />
                <span>Kontakt</span>
              </a>
              <Link href="/privacy">
                <a className="flex justify-center items-center gap-1 hover:text-black dark:hover:text-white transition">
                  <ShieldCheckIcon className="h-4 w-4" />
                  <span>Datenschutz</span>
                </a>
              </Link>
              <a href="https://docs.mc-mineserver.de/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1 hover:text-black dark:hover:text-white transition">
                <DocumentIcon className="h-4 w-4" />
                <span>Docs</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
      <Script src="https://tvg25fy65wdg.statuspage.io/embed/script.js"></Script>
    </>
  )
}
export default MyApp
