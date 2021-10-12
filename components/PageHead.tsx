import Image from 'next/image'

interface pageHeadProps {
  title: string,
  image: StaticImageData,
  width?: number,
  height?: number
}

function PageHead({ title, image, width, height }: pageHeadProps) {
  return (
    <div className="grid rounded-3xl shadow-lg">
      <div className="relative h-96 overflow-hidden rounded-3xl bg-img">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={image} width={width || 1920} height={height || 1080} layout="fixed" />
        </div>
      </div>
      <div className="fg-text z-10 flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-white">{ title }</h1>
      </div>
    </div>
  )
}

export default PageHead
