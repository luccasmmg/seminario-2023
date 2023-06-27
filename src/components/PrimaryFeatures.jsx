import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Disclosure, Tab, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { Container } from '@/components/Container'
import { Tgs } from './tgs'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

function Tg({ tg }) {
  return (
    <Disclosure key={tg.id}>
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
        return <Tg tg={tg} key={tg.id} />
      })}
    </div>
  )
}

export function PrimaryFeatures() {
  const tgs = Tgs
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Grupos Temáticos
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Todos os trabalhos do seminário são discutidos e avaliados dentro de
            grupos temáticos que tem como objetivo fomentar a discussão e
            diálogo dentro do contexto de um recorte específico, cada grupo faz
            parte de alguma das grandes áreas do conhecimento das ciências
            sociais aplicadas
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2">
          <div>
            {Tgs.data
              .filter(
                (area) =>
                  area.name === 'Direito Privado e Público' ||
                  area.name === 'Serviço Social'
              )
              .map((area) => {
                return <Area area={area} key={area.name} />
              })}
          </div>
          <div>
            {Tgs.data
              .filter(
                (area) =>
                  area.name !== 'Direito Privado e Público' &&
                  area.name !== 'Serviço Social'
              )
              .map((area) => {
                return <Area area={area} key={area.name} />
              })}
          </div>
        </div>
      </Container>
    </section>
  )
}
