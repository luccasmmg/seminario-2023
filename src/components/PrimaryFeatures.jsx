import { Disclosure, Tab, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { Container } from '@/components/Container'
import { Tgs } from './tgs'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

function Tg({ tg }) {
  return (
    <Disclosure>
      <Disclosure.Button
        as="h4"
        className="flex cursor-pointer items-center font-medium tracking-tight text-gray-400 transition hover:text-gray-200"
      >
        {tg.name}
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="my-4 rounded bg-slate-800 p-4 text-justify text-gray-400">
          {tg.syllabus}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  )
}

function Area({ area }) {
  return (
    <div key={area.name}>
      <h3 className="flex items-center gap-x-2 py-3 text-xl font-medium tracking-tight text-white">
        <InformationCircleIcon className="h-6 w-6 text-white" />
        {area.name}
      </h3>
      {area.tgs.map((tg) => {
        return (
          <div key={tg.id} className="py-2">
            <Tg tg={tg} />
          </div>
        )
      })}
    </div>
  )
}
import { Unna } from 'next/font/google'

const unna = Unna({ subsets: ['latin'], weight: '700' })

export function PrimaryFeatures() {
  const tgs = Tgs
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="py-20 sm:py-32"
      style={{
        backgroundColor: 'rgb(30, 41, 59);',
        backgroundImage:
          'radial-gradient(at 7% 85%, #00002E, transparent 100%), radial-gradient(at 61% 13%,  #B5191E, transparent 100%), radial-gradient(at 88% 83%,  #6B0B0C, transparent 100%), radial-gradient(at 87% 10%,  #6B0B0C, transparent 100%);',
      }}
    >
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            className={`max-w-2xl  text-6xl  font-medium tracking-tight text-white lg:max-w-3xl ${unna.className}`}
          >
            Grupos Temáticos
          </h2>
          <p className="mt-8 text-lg text-white">
            Todos os trabalhos do seminário são discutidos e avaliados dentro de
            grupos temáticos que tem como objetivo fomentar a discussão e
            diálogo dentro do contexto de um recorte específico, cada grupo faz
            parte de alguma das grandes áreas do conhecimento das ciências
            sociais aplicadas
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-3">
          {Tgs.data.map((area) => {
            return <Area area={area} key={area.name} />
          })}
        </div>
      </Container>
    </section>
  )
}
