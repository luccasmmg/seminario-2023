import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import ky from 'ky'

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export function PopUp() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="absolute right-0 top-0 pr-4 pt-4">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationCircleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Atenção
                      </Dialog.Title>
                      <p className="pt-2">
                        Isenções com base em situação econômica podem ser
                        solicitadas enviando o comprovante retirado do SIGAA
                        para suporteseminarioccsa@gmail.com
                      </p>
                      <p className="pt-2">
                        As datas e horas das apresentações de posteres/artigos e
                        casos para ensino podem ser visualizadas na{' '}
                        <Link className="text-red-900" href="/programacao">
                          programação do evento
                        </Link>
                      </p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Os prazos do seminário foram alterados, segue abaixo
                          as novas datas
                        </p>
                        <ul className="space-y-1 py-4">
                          <li>
                            <span className="font-bold">16/6 a 05/08</span> -
                            Inscrição no evento dentro do SIGEVA
                          </li>
                          <li>
                            <span className="font-bold">16/6 a 05/09</span> -
                            Pagamento e envio de COMPROVANTE da GRU junto ao
                            sistema
                          </li>
                          <li>
                            <span className="font-bold">17/8 a 06/9</span> -
                            Inscrições em conferências, minicursos, oficinas e
                            mesasredondas
                          </li>
                          <li>
                            <span className="font-bold">05/9 </span> -
                            Comunicado final de aceitação ou não dos trabalhos
                            submetidos
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Para mais informações entre em contato com
                    suporteseminarioccsa@gmail.com
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>25 Seminário do CCSA</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <PopUp />
        <Hero />
        <PrimaryFeatures />
        {/*<SecondaryFeatures />*/}
        <CallToAction />
        {/*<Reviews />*/}
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
