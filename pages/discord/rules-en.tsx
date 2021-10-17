import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../../components/PageHead'
import DiscordWebp from '../../assets/discord.webp'
import style from '../../styles/discord.module.css'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Rules"
        description="The rules of our Discord"
        openGraph={{
          images: [
            { url: 'https://api.mc-mineserver.de/v3/files/8badb6a4fae7c7f6930fba7cc9ebcd7c.webp', width: 1920, height: 1080, alt: 'Discord Image' }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-4">
        <PageHead title="Rules" image={DiscordWebp} />
        <h3 className="font-semibold text-xl text-center">Following the rules is mandatory and will be severely punished if they are not observed</h3>
        <ul className={`${style.ul} mb-4`}>
          <li><b>NO</b> Spam</li>
          <li><b>NO</b> inappropriate messages to other members</li>
          <li><b>NO</b> inappropriate NSFW links, pictures, etc.</li>
          <li><b>NO</b> advertising of any kind</li>
          <li><b>NO</b> earrape of any kind in chat or voice chat</li>
          <li><b>FOLLOW</b> the <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" className="link">Community-Guidelines</a></li>
        </ul>
      </div>
    </>
  )
}

export default Home
