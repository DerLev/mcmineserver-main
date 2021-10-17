import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../../components/PageHead'
import DiscordWebp from '../../assets/discord.webp'
import style from '../../styles/discord.module.css'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Regeln"
        description="Die Regeln unseres Discords"
        openGraph={{
          images: [
            { url: 'https://api.mc-mineserver.de/v3/files/8badb6a4fae7c7f6930fba7cc9ebcd7c.webp', width: 1920, height: 1080, alt: 'Discord Image' }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-4">
        <PageHead title="Regeln" image={DiscordWebp} />
        <h3 className="font-semibold text-xl text-center">Das Bevolgen dieser Regeln ist verbindlich und wird bei nicht beachten hart bestraft</h3>
        <ul className={`${style.ul} mb-4`}>
          <li><b>KEIN</b> Spam</li>
          <li><b>KEINE</b> unangemessenen Nachrichten gegenüber anderen Mitgliedern</li>
          <li><b>KEINE</b> unangebrachten NSWF Links, Bilder, etc.</li>
          <li><b>KEINE</b> Werbung jeglicher Art</li>
          <li><b>KEIN</b> Earrape jeglicher Art im Chat oder Voice-Chat</li>
          <li><b>BEFOLGT</b> die <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" className="link">Community-Richtlinien</a></li>
        </ul>
      </div>
    </>
  )
}

export default Home
