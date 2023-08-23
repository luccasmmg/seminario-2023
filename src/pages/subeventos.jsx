import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Unna } from 'next/font/google'
import Link from 'next/link'

const unna = Unna({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <>
      <Head>
        <title>25 Seminário do CCSA</title>
        <meta name="description" content="Seminário do CCSA" />
      </Head>
      <Header />
      <main className="py-8">
        <Container>
          <div className="flex">
            <h2
              className={`mx-auto  max-w-2xl text-6xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Subeventos
            </h2>
          </div>
          <div className="py-8">
            <h3
              className={`mx-auto  max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              III Colóquio Feminismo Materialista: Feministas contra o
              capitalismo
            </h3>
            <h4
              className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Manhã 11/09 8h às 12h NEPSA 1
            </h4>
            <div className="flex flex-col gap-y-2">
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Coordenação
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Prof.Dra. Silvana Mara (DESSO- UFRN); Tatianne (Discente
                  Pós-Graduação)
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Conferências
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>
                    MESA DE ABERTURA: Direção CCSA; DESSO; PPGSS; CA;
                    GEPETD/QTEMOSS; CRESS-RN; Lançamento do Núcleo feminista
                    Marxista
                  </p>
                  <p>
                    CONFERÊNCIA: As lutas feministas no enfrentamento da divisão
                    sociossexual e racial do trabalho.{' '}
                  </p>
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Palestrantes
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul>
                    <li>Dra. Maria Bethania Avila (SOS CORPO – PE);</li>
                    <li>Prof.Dra. Veronica Ferreira (DESSO- UFRN);</li>
                    <li>Prof.Dra. Janayke Almeida</li>
                  </ul>
                </dd>
              </div>
            </div>
            <h4
              className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Tarde 11/09 14h às 18h NEPSA 1
            </h4>
            <div className="flex flex-col gap-y-2">
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Coordenação
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Prof.Dra. Antoanette Madureira (UFRN); Natália (Discente
                  Pós-Graduação)
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Conferências
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>
                    CONFERÊNCIA: As contribuições do feminismo materialista e da
                    Teoria Unitária para à crítica radical do capitalismo.
                  </p>
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Palestrantes
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul>
                    <li>Prof. Dra. Mirla Cisne (UERN)</li>
                    <li>Prof.Dra. Rayanne Noronha (UFPB)</li>
                  </ul>
                </dd>
              </div>
            </div>
            <h4
              className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Manhã 12/09 8h às 12h NEPSA 1
            </h4>
            <div className="flex flex-col gap-y-2">
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Coordenação
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Prof. Dra. Miriam Inácio (UFRN); Quitéria (Discente
                  Pós-Graduação)
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Conferências
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <p>
                    CONFERÊNCIA: Ofensiva Capitalista, conservadorismo e
                    violência contra às mulheres
                  </p>
                </dd>
              </div>
              <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Palestrantes
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul>
                    <li>Prof.Dra. Milena Barroso (UFS) (vídeo conferência);</li>
                    <li>Prof.Dra. Fernanda Marques (UERN)</li>
                  </ul>
                </dd>
              </div>
            </div>
            <Link
              href="/documents/subevents/coloquio_feminista.pdf"
              className={`max-w-2xl py-4 text-xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Mais informações
            </Link>
          </div>
          <h3
            className={`mx-auto  max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            X Colóquio de Pesquisa em Ciência da Informação
          </h3>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            13/09 (Quarta-feira)
          </h4>
          <div className="flex flex-col gap-y-4">
            <p>
              <span className="font-bold">
                Visita Técnica – Nutseca e Biblioteca Central
              </span>{' '}
              – Com Bernardina Freire, Geysa Flávia e Ricardo Pimenta
            </p>
            <p className="font-bold">Abertura do Evento – NEPSA I:</p>
            <p>15:30 Apresentação Cultural</p>
            <p className="font-bold">15:45 Mesa de Abertura</p>
            <ul>
              <li>
                Profa. Dra. Maria Lussieu da Silva (Diretora do CCSA/UFRN);
              </li>
              <li>
                Profa. Dra. Monica Marques Carvalho Gallotti (Chefe do
                DECIN/UFRN);
              </li>
              <li>
                Profa. Dra. Nancy Sánchez-Tarragó (Coordenadora COBIB/UFRN);
              </li>
              <li>
                Prof. Dr. Fernando Luiz Vecchiato (Coordenador PPGIC/UFRN);
              </li>
              <li>Profa. Dra. Patricia Macêdo (Coordenadora X CPCI).</li>
            </ul>
            <p>
              <span className="font-bold">16h às 17h30:</span> Palestra de
              abertura e Aula Magna do PPGIC com o professor Dr. Ricardo
              Medeiros Pimenta
            </p>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            14/09 (Quinta-feira)
          </h4>
          <div className="flex flex-col gap-y-4">
            <p>
              {' '}
              09h30 às 11h30:{' '}
              <span className="font-bold">Grupos Temáticos 1</span>
            </p>
            <p className="font-bold">13h às 15h: Minicursos</p>
            <p>
              15h30 às 17h: Mesa redonda: “Humanidades Digitais: Inovação e
              Tecnologia na Ciência da Informação”. Com Ricardo Pimenta
              (Ibict-UFRJ) e Leonardo Fernandes Nascimento (UFBA) Mediadora:
              Profa. Dra. Monica Marques Carvalho Gallotti (UFRN)
            </p>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            14/09 (Quinta-feira)
          </h4>
          <div className="flex flex-col gap-y-4">
            <p>
              {' '}
              09h30 às 11h30:{' '}
              <span className="font-bold">Grupos Temáticos 2</span>
            </p>
            <p>
              13h às 15h: <span className="font-bold">Minicursos</span>
            </p>
            <p>
              15h30: <span className="font-bold">Painel:</span> “Pesquisas em
              Gestão da Informação e do Conhecimento” -PPGIC Mediadores:
              Fernando Vecchiato e Andrea Carvalho. Participação: Professores do
              PPGIC.
            </p>
            <p>
              17h: <span className="font-bold">Encerramento</span>
            </p>
          </div>
          <Link
            href="/documents/subevents/coloquio_ciencia_da_informacao.docx"
            className={`max-w-2xl py-4 text-xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            Mais informações
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  )
}
