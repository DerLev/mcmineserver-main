import type { NextPage } from 'next'
import Image from 'next/image'
import HomeWebp from '../assets/home.webp'

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid">
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
        <h2 className="text-2xl font-semibold">Unsere Services:</h2>
        <div className="grid"></div>
      </div>
    </div>
  )
}

export default Home
