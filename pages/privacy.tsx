import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../components/PageHead'
import DefaultWebp from '../assets/default.webp'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Datenschutz"
        description="Unsere Datenschutzerklärung"
        openGraph={{
          images: [
            { url: 'https://api.mc-mineserver.de/v3/files/0ee00b20a896564d6e9cea4b0da75b5b.webp', width: 1920, height: 1408, alt: 'McMineserver Head Image' }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-4 mb-4">
        <PageHead title="Datenschutz" image={DefaultWebp} />
        <div>
          <h2 className="text-2xl font-medium text-center mb-4">Datenschutz ist uns wichtig</h2>
          <p>
            Diese Webseite benutzt keine tracking Software.
            <br />
            Daher gibt es keine Cookies, die im Browser des Nutzers gespeichert werden.
            <br />
            Es wird nur im lokalen Speicher des Browsers ein Boolean gespeichert, das dafür sorgt,
            dass das Cookie-Banner nicht mehr nach Bestätigung auftaucht.
          </p>
          <h3 className="text-xl font-medium mb-4 mt-3">Weitere Informationen und verwendete Software:</h3>
          <p>
            Es werden zwei externe Skripte in dieser Webseite benutzt, welche aber kein User-Tracking betreiben.
            <br />
            Es handelt sich hierbei um das Skript von <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="link">Google Fonts</a>,
            welches für das Importieren der hier verwendeten Schriftarten verantwortlich ist.
            <br />
            <br />
            Des Weiteren wird noch das Skript unserer <a href="https://mcmineserver.statuspage.io" target="_blank" rel="noopener noreferrer" className="link">Statuspage</a>&nbsp;
            importiert.
            <br />
            Es sorgt für das einblenden einer Meldung im Störfall. Das Skript verwendet die Cookies von&nbsp;
            <a href="https://statuspage.io/" target="_blank" rel="noopener noreferrer" className="link">statuspage.io</a>.
            Da die meisten Nutzer diesen Service nicht verwenden, sind und werden keine Cookies gespeichert.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
