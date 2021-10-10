import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config.json'
import ENV from '../env.json'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo dangerouslySetAllPagesToNoIndex={ENV.stagingEnv} dangerouslySetAllPagesToNoFollow={ENV.stagingEnv} {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
