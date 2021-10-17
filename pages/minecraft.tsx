import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../components/PageHead'
import MinecraftWebp from '../assets/minecraft.webp'
import { ServerIcon, StatusOnlineIcon } from '@heroicons/react/outline'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

const resolveMCStatus = (type: string) => {
  switch (type) {
    case 'info':
      return 'bg-blue-400 border-blue-500 text-blue-800'
    case 'success':
      return 'bg-green-400 border-green-600 text-green-800'
    case 'warning':
      return 'bg-yellow-400 border-yellow-500 text-yellow-800'
    case 'critical':
      return 'bg-red-400 border-red-500 text-red-800'
    default:
      return 'bg-blue-400 border-blue-500 text-blue-800'
  }
}

const resolveStatus = (indicator: string, position: string) => {
  if(position === 'outer') {
    switch (indicator) {
      case 'none':
        return 'border-green-500 bg-green-600 dark:border-green-600 dark:bg-green-800'
      case 'minor':
        return 'border-yellow-500 bg-yellow-600'
      case 'major':
      case 'critical':
        return 'border-red-500 bg-red-600'
      case 'maintenance':
        return 'border-blue-500 bg-blue-600'
      default:
        return 'border-gray-600 bg-gray-800'
    }
  }

  if(position === 'inner') {
    switch (indicator) {
      case 'none':
        return 'bg-green-400'
      case 'minor':
        return 'bg-yellow-400'
      case 'major':
      case 'critical':
        return 'bg-red-400'
      case 'maintenance':
        return 'bg-blue-400'
      default:
        return 'bg-gray-400'
    }
  }
}

const Home: NextPage = ({ notification, pings, status, fetchDate }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <hr />
          {
            notification.show &&
            <>
              <div className={`py-2 px-4 border-l-8 rounded-sm ${resolveMCStatus(notification.type)}`}>
                <h2 className="text-lg font-medium">{ notification.title }</h2>
                <p>{ notification.text }</p>
              </div>
              <hr />
            </>
          }
          <h2 className="text-2xl font-medium">Status:</h2>
          <div className="flex justify-center items-center mb-4 text-white">
            <div className={`border-2 py-2 px-4 rounded-lg flex items-center gap-2 ${resolveStatus(status.indicator, 'outer')}`}>
              <span className={`h-4 w-4 rounded-full ${resolveStatus(status.indicator, 'inner')}`}></span>
              <span className="font-semibold">{ status.description }</span>
            </div>
          </div>
          <table className="mb-1">
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
            {
              pings.map((ping:any, i:number) => (
                <tr key={i}>
                  <td>{ping.name}</td>
                  <td>
                    <div className={`inline-flex justify-center items-center gap-1 border-2 px-2 rounded-md text-white ${ ping.online ? 'border-green-500 bg-green-600 dark:border-green-600 dark:bg-green-800' : 'border-red-400 bg-red-500' }`}>
                      <span className={`w-3 h-3 rounded-full ${ ping.online ? 'bg-green-400' : 'bg-red-300' }`}></span>
                      <span className="font-medium">{ ping.online ? 'Online' : 'Offline' }</span>
                    </div>
                  </td>
                </tr>
              ))
            }
          </table>
          <p className="text-right mb-4 text-gray-500">Updated at: {fetchDate}</p>
          <a
            href="https://mcmineserver.statuspage.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 w-full py-3 px-5 border-2 text-center rounded-xl border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition mb-4"
          >
            <StatusOnlineIcon className="w-4 h-4" />
            <span>Status page</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const notification = await fetch('https://api.mc-mineserver.de/v3/notification/minecraft').then(res => res.json());
  const pings = await fetch('https://api.mc-mineserver.de/v3/ping/status').then(res => res.json());
  const status: any = await fetch('https://tvg25fy65wdg.statuspage.io/api/v2/status.json').then(res => res.json());

  return {
    props: {
      notification: notification,
      pings: pings,
      status: status.status,
      fetchDate: moment().tz('Europe/Berlin').format('HH:mm DD.MM.YY')
    },

    revalidate: 60 * 30
  }
}
