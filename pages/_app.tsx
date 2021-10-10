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
import Head from 'next/head'

const NavLinks = [
  { title: 'Minecraft', href: '/' },
  { title: 'Discord', href: '/' },
  { title: 'Status', href: '/' },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <DefaultSeo dangerouslySetAllPagesToNoIndex={ENV.stagingEnv} dangerouslySetAllPagesToNoFollow={ENV.stagingEnv} {...SEO} />
      <div className="flex flex-col items-stretch min-h-screen">
        {
          ENV.stagingEnv &&
          <StagingNote />
        }
        <nav className="flex-grow-0 bg-gray-800 text-white flex justify-center items-center px-4 font-display">
          <div className="flex max-w-7xl w-full py-2 justify-between items-center">
            <Link href="/">
              <a className="hover:bg-primary hover:bg-opacity-50 px-2 py-1 -mx-2 -my-1 rounded-lg transition">
                <h1 className="text-2xl flex items-center gap-1">
                  <Image src={LogoSvg} width={25} height={25} />
                  <span className="hidden sm:block">McMineserver</span>
                </h1>
              </a>
            </Link>
            <div className="flex gap-2">
              {
                NavLinks.map((link, i) => (
                  <Link href={link.href}>
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
        <footer className="flex-grow-0 flex justify-center items-center bg-gray-200 dark:bg-gray-800 text-gray-400 bg-opacity-50 font-display">
          <div className="flex max-w-7xl w-full sm:justify-between items-center flex-col sm:flex-row">
            <div>
              <span>&copy; { moment().format('yyyy') } McMineserver</span>
            </div>
            <div className="flex justify-end items-center gap-3">
              <a href="mailto:instagram@mc-mineserver.de" className="flex justify-center items-center gap-1 hover:text-black dark:hover:text-white transition">
                <MailIcon className="w-4 h-4" />
                <span>Kontakt</span>
              </a>
              <Link href="/">
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
    </>
  )
}
export default MyApp
