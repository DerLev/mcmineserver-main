import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../components/PageHead'
import MinecraftWebp from '../assets/minecraft.webp'
import { ServerIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Minecraft"
        description="Hier siehst du den Status unserer Minecraft-Server"
        openGraph={{
          images: [
            { url: 'https://api.mc-mineserver.de/v3/files/d167b7d43957ba4be5cec02ddd26e6af.webp', width: 1920, height: 1080, alt: 'A Minecraft panorama' }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-4">
        <PageHead title="Minecraft" image={MinecraftWebp} />
        <div>
          <a
            href="https://sm.mc-mineserver.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-500 rounded-md shadow py-2 px-3 text-white hover:bg-gray-600 transition text-lg flex items-center justify-center gap-1"
          >
            <ServerIcon className="h-5 w-5" />
            <span>Server-Manager</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
