import type { NextPage } from 'next'
import Image from 'next/image'
import HomeWebp from '../assets/home.webp'
import style from '../styles/index.module.css'
import { ServerIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  const router = useRouter();

  const clickFeature = (e: any, href: string) => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <>
      <NextSeo title="Home" />
      <div className="grid grid-cols-1 gap-4">
        <div className="grid shadow-lg">
          <div className="relative h-96 overflow-hidden rounded-3xl bg-img">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={HomeWebp} width={1920} height={1080} layout="fixed" />
            </div>
          </div>
          <div className="fg-text z-10 flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-white">Home</h1>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-8">Unsere Services:</h2>
          <div className={`grid ${style.featuresGrid} gap-1 mb-12`}>
            <div style={{ gridArea: 'a' }}>
              <button
                className="w-full h-52 flex items-center justify-center group rounded-xl bg-gradient-to-tr from-green-700 to-green-300 shadow-lg"
                onClick={(e) => clickFeature(e, '/minecraft')}
              >
                <ServerIcon className="h-24 w-24 transform group-hover:scale-125 transition" />
              </button>
            </div>
            <div style={{ gridArea: 'b' }} className="flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-2xl font-medium">Minecraft</h3>
                <p>Status unserer Server</p>
              </div>
            </div>
            <div style={{ gridArea: 'c' }} className="flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-2xl font-medium">Discord</h3>
                <p>
                  Hier chatten wir, spielen gemainsam<br />
                  Spiele und genießen das Leben
                </p>
              </div>
            </div>
            <div style={{ gridArea: 'd' }}>
              <button
                className="w-full h-52 flex items-center justify-center group rounded-xl bg-gradient-to-tr from-discord to-indigo-300 shadow-lg"
                onClick={(e) => clickFeature(e, '/discord')}
              >
                <FontAwesomeIcon icon={faDiscord} className="h-24 w-24 text-7xl transform group-hover:scale-125 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
