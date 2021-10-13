import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import PageHead from '../components/PageHead'
import DiscordWebp from '../assets/discord.webp'
import fetch from 'node-fetch'
import Image from 'next/image'
import { MailOpenIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { Fragment } from 'react'
import style from '../styles/discord.module.css'


const isAnimated = (discord: any) => {
  var icon = discord.icon.substring(0, 2)
  if(icon == "a_") return true
  return false
}

const nitroSvg = (level: number) => {
  switch (level) {
    case 1:
      return <svg className="w-4 h-4 text-discordNitro" width="512" height="512" viewBox="0 0 6 11"><path fill="currentColor" d="M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"></path></svg>
    case 2:
      return <svg className="w-4 h-4 text-discordNitro" width="512" height="512" viewBox="0 0 6 11"><g fill="currentColor" fillRule="evenodd"><path d="M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"></path><path d="M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"></path></g></svg>
    case 3:
      return <svg className="w-4 h-4 text-discordNitro" width="512" height="512" viewBox="0 0 6 11"><g fill="currentColor" fillRule="evenodd"><path d="M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"></path><path d="M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"></path><path d="M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"></path></g></svg>
    default:
      break
  }
}

const Home: NextPage = ({ discord }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title="Discord"
        description="Hier chatten wir, spielen gemainsam Spiele und genießen das Leben"
        openGraph={{
          images: [
            { url: 'https://api.mc-mineserver.de/v3/files/8badb6a4fae7c7f6930fba7cc9ebcd7c.webp', width: 1920, height: 1080, alt: 'Discord Image' }
          ]
        }}
      />
      <div className="grid grid-cols-1 gap-4">
        <PageHead title="Discord" image={DiscordWebp} />
        <div className="flex justify-center items-center">
          <div className="flex">
            <div className="h-28 w-28">
              {
                isAnimated(discord)
                  ? <Image src={'https://cdn.discordapp.com/icons/' + discord.id + '/' + discord.icon + '.gif?size=512'} width={512} height={512} layout="responsive" alt={`Server icon of ${discord.name}`} />
                  : <Image src={'https://cdn.discordapp.com/icons/' + discord.id + '/' + discord.icon + '.png?size=512'} width={512} height={512} layout="responsive" alt={`Server icon of ${discord.name}`} />   
              }
            </div>
            <div className="flex flex-col justify-center font-medium">
              <h2 className="flex items-center gap-2 text-2xl">
                <span>{discord.name}</span>
                { nitroSvg(discord.premium_tier) }
              </h2>
              <h3 className="text-lg flex items-center gap-2 font-medium">
                <span className="w-4 h-4 bg-green-400 block rounded-full"></span>
                <span>{discord.approximate_presence_count} User online</span>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            Trete unserem Discord bei.<br />
            Hier chatten wir, spielen gemainsam Spiele und genießen das Leben.
          </p>
        </div>
        <div>
          <a
            href="https://discord.mc-mineserver.de/g/420989146853670912"
            className="flex w-full py-3 px-5 border-2 justify-center items-center rounded-lg border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 transition gap-1 my-4"
          >
            <MailOpenIcon className="w-4 h-4" />
            <span>Beitreten</span>
          </a>
        </div>
        
        <Disclosure as="div" id="rules">
          {({ open }) => (
            <>
              <Disclosure.Button as={Fragment}>
                <button className="flex items-center w-full py-3 px-5 rounded-lg bg-gray-300 dark:bg-gray-700 gap-1">
                  <ChevronDoubleDownIcon className={`w-4 h-4 transform ${ open ? 'rotate-180' : 'rotate-0' }`} />
                  <span>Regeln</span>
                </button>
              </Disclosure.Button>

              <Disclosure.Panel as="div" className="bg-gray-200 dark:bg-gray-800 mx-2 rounded-b-lg py-1 px-4">
                <h3 className="font-semibold text-xl text-center">Das Bevolgen dieser Regeln ist verbindlich und wird bei nicht beachten hart bestraft</h3>
                <ul className={`${style.ul} mb-4`}>
                  <li><b>KEIN</b> Spam</li>
                  <li><b>KEINE</b> unangemessenen Nachrichten gegenüber anderen Mitgliedern</li>
                  <li><b>KEINE</b> unangebrachten NSWF Links, Bilder, etc.</li>
                  <li><b>KEINE</b> Werbung jeglicher Art</li>
                  <li><b>KEIN</b> Earrape jeglicher Art im Chat oder Voice-Chat</li>
                  <li><b>BEFOLGT</b> die <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" className="link">Community-Richtlinien</a></li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const discord = await fetch('https://api.mc-mineserver.de/v3/discord/guild/420989146853670912').then(res => res.json())

  return {
    props: {
      discord: discord
    },

    revalidate: 60 * 30
  }
}
