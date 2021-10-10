import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config.json'
import ENV from '../env.json'
import StagingNote from '../components/StagingNote'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo dangerouslySetAllPagesToNoIndex={ENV.stagingEnv} dangerouslySetAllPagesToNoFollow={ENV.stagingEnv} {...SEO} />
      {
        ENV.stagingEnv &&
        <StagingNote />
      }
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
