import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Unna } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

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
              className={`mx-auto mt-8 max-w-2xl text-6xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Subeventos
            </h2>
          </div>
          <div className="py-8">
            <h3
              className={`mx-auto max-w-2xl text-center text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Cine CCSA{' '}
            </h3>
            <div className="flex flex-col space-y-2 py-8">
              <Image
                src="/images/cine_ccsa.jpeg"
                className="mx-auto py-4"
                width={500}
                height={300}
              />
              <p>
                O Cine CCSA, projeto de exibição de filmes como recurso
                pedagógico do Centro de Ciências Sociais Aplicadas (CCSA), da
                UFRN, promove a Mostra de Filmes: Poder, Trabalho e Tecnologia
                para compor a programação do XXV Seminário de Pesquisa do CCSA.
                O evento conta com dois filmes que serão exibidos de forma
                gratuita nos dias 13 e 14 de setembro às 14h no Auditório do
                Nepsa 1.
              </p>
              <p>
                O primeiro filme a ser exibido se chama “Você não estava aqui”
                (2020), de direção do britânico Ken Loach que ao abordar um
                desempregado que aceita o posto de motorista-entregador na
                chamada nova economia, sem qualquer vínculo empregatício
                direitos e garantias, traz à tona a exploração do trabalho pela
                economia e suas consequências para a sociedade humana.
              </p>
              <p>
                O segundo filme “O quinto Poder” (2013), de direção do americano
                Bill Condon retrata a história de Jullian Assange que ao fundar
                o site wikileaks conta com a ajuda de seu amigo para fornecer
                uma plataforma para que denunciantes, anonimamente, exponham
                segredos do governo e crimes corporativos. O grau de influência
                de Assange aumenta, e a relação entre os dois amigos acaba
                bastante abalada.
              </p>
              <p>
                No evento durante a exibição do Primeiro filme teremos os
                comentários da Profa. titular da UFRN Sandra F Erickson que é
                Graduada em Filosofia, possui Mestrado em Inglês, Doutorado em
                Literatura e Cultura Brasileira, Pós-Doutorado em Teoria e
                Crítica Literária e Pós-Doutorado em Ciências da Religião. Além
                disso, durante a segunda exibição, contaremos com os comentários
                do Professor Marcos Botelho que é Professor adjunto da UFRJ,
                possui Mestrado e Doutorado em Serviço Social e tem experiência
                na área de conhecimento do Serviço Social, com ênfase na
                pesquisa da teoria social de Marx e da vida cotidiana no
                capitalismo.
              </p>
            </div>
          </div>
          <div className="py-8">
            <h3
              className={`mx-auto max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              III Colóquio Feminismo Materialista: Feministas contra o
              capitalismo
            </h3>
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
              <img src="/images/coloquio_feminista_1.jpeg" />
              <img src="/images/coloquio_feminista_2.jpeg" />
              <img src="/images/coloquio_feminista_3.jpeg" />
              <img src="/images/coloquio_feminista_4.jpeg" />
            </div>
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
            className={`mx-auto mt-8 max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            X Colóquio de Pesquisa em Ciência da Informação
          </h3>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            13/09 (Quarta-feira)
          </h4>
          <div className="flex flex-col gap-y-2">
            <p>
              <span className="font-bold">16h às 17h30:</span>
              Palestra de abertura e Aula Magna do PPGIC com a professora Dra.
              Silvana Vidotti “Representação de patrimônios culturais em
              ambientes digitais.”{' '}
            </p>
            <p>
              <span className="font-bold">Mediação: </span> Profa. Dra. Monica
              Marques Carvalho Gallotti (UFRN)
            </p>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            14/09 (Quinta-feira)
          </h4>
          <div className="flex flex-col gap-y-4">
            <p>
              <span className="font-bold">09h30 às 12:00: </span>
              <span>
                Apresentação de Trabalhos dos Grupos Temáticos (Bloco 1)
              </span>
            </p>
            <p>
              <span className="font-bold"> 13h às 15h: </span>
              Apresentação de Trabalhos dos Grupos Temáticos (Bloco 2)
            </p>
            <p>
              <span className="font-bold"> 15h30 às 17h: </span>
              Mesa redonda: Inovação e Tecnologia na formação do profissional da
              informação: Biblioteconomia e Arquivologia. Com Bernardina Freire
              (UFPB), Geysa Flávia (UFPB)
            </p>
            <p>
              {' '}
              <span className="font-bold">Mediação:</span> Profa. Dra. Silvana
              Vidotti
            </p>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            15/09 (Sexta-feira)
          </h4>
          <div className="flex flex-col gap-y-4">
            <p>
              {' '}
              <span className="font-bold">09h30 às 11:30: </span>
              Roda de Conversa Científica com Silvana Vidotti e professores do
              PPGIC
            </p>
            <p>
              <span className="font-bold">16:00 </span>
              “Pesquisas em Gestão da Informação e do Conhecimento” -PPGIC
            </p>
            <p>
              <span className="font-bold">Mediador: </span>
              Fernando Vecchiato e Andrea Carvalho.
            </p>{' '}
            <p>
              <span className="font-bold">Participação:</span> Professores do
              PPGIC.
            </p>
            <p>
              17:30h: <span className="font-bold">Encerramento</span>
            </p>
          </div>
          <Link
            href="/documents/subevents/coloquio_ciencia_da_informacao.docx"
            className={`max-w-2xl py-4 text-xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            Mais informações
          </Link>
          <h3
            className={`mx-auto  mt-8 max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            Colóquio 45 Anos de PPGA: A Administração no contexto da
            inteligência artificial
          </h3>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            12 de Set. Manhâ
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Adrianne Paula Vieira de Andrade (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Mesa-redonda: Pesquisando na era do ChatGPT: ferramentas e
                  impactos
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Palestrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Profa. Anatalia Saraiva Martins Ramos – DEPAD/UFRN</li>
                  <li>Prof. Elias Jacob de Medeiros Neto - IMD/UFRN</li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            12 de Set. Tarde
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Janaynna de Moura Ferraz (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Conferência de Abertura: Tecnologia e mundo do trabalho na
                  administração: agenda de pesquisa
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Palestrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>
                    Prof.a Dr.a Deise Luiza da Silva Ferraz - CEPEAD/UFMG.
                  </li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            13 de Set. Tarde
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Janaynna de Moura Ferraz (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Mesa-redonda: Uberização do trabalho e empresas-plataforma
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Palestrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Profa. Janaynna de Moura Ferraz – DEPAD/UFRN</li>
                  <li>Prof.a Dr.a Deise Luiza da Silva Ferraz - CEPEAD/UFMG</li>
                  <li>
                    Doutoranda Aline Francilurdes Nery do Vale – PPGA/UFRN
                  </li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            13 de Set. Manhã
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Anatália Saraiva Martins Ramos (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Mesa-redonda: Impacto da Inteligência Artificial na
                  Empregabilidade: oportunidades e desafios
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Palestrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Profa. Anatalia Ramos</li>
                  <li>
                    Prof. Luiz Pinheiro (Universidade Positivo - Curitiba)
                  </li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            12, 13, 14 de Set. Tarde
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Anatália Saraiva Martins Ramos (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Minicurso: Revisão da Literatura aprimorada com Text Mining
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ministrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Prof. Fernando Lhamas (EA/UFBA)</li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            14 de Set. Noite
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Janaynna de Moura Ferraz (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Oficina: Estudos críticos sobre a prática empreendedora:
                  operacionalização de agenda de pesquisa
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ministrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Profa. Janaynna de Moura Ferraz – DEPAD/UFRN</li>
                  <li>Luana Borges – NIP/TraMa/UFRN</li>
                </ul>
              </dd>
            </div>
          </div>
          <h4
            className={`max-w-2xl py-4 text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            15 de Set. Noite
          </h4>
          <div className="flex flex-col gap-y-2">
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Coordenação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Prof.a Dr.a Janaynna de Moura Ferraz (DEPAD- PPGA/UFRN)
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Conferência
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>
                  Oficina: Estudos críticos sobre a prática empreendedora:
                  operacionalização de agenda de pesquisa
                </p>
              </dd>
            </div>
            <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ministrantes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul>
                  <li>Profa. Janaynna de Moura Ferraz – DEPAD/UFRN</li>
                  <li>Luana Borges – NIP/TraMa/UFRN</li>
                </ul>
              </dd>
            </div>
          </div>
          <Link
            href="/documents/subevents/coloquio_adm.pdf"
            className={`max-w-2xl py-4 text-xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            Mais informações
          </Link>
          <h3
            className={`mx-auto mt-8 max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
          >
            Ciclo de Debates em Administração Pública
          </h3>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Data
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Turno
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Tipo
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Título
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Responsável
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Participantes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {publicAdmActivities.map((item) => (
                        <tr key={item.title}>
                          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {item.date}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.turn}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.type}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.title}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.responsible}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.participants}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/documents/subevents/coloquio_adm_publica.pdf"
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

const publicAdmActivities = [
  {
    date: '12/set',
    turn: '03 Noite',
    type: 'Conferência',
    title:
      'Integrando Carreira, Inovação e Tecnologia no Mundo do Trabalho Contemporâneo',
    responsible: 'Marconi Macedo',
    participants: 'Anielson Barbosa da Silva (UFPB)',
  },
  {
    date: '13/set',
    turn: '03 Noite',
    type: 'Conferência',
    title:
      'Inteligência Artificial e seus Impactos nas Organizações Públicas - Ciclo de Debates em Administração Pública',
    responsible:
      'Hironobu Sano (Núcleo de Inovação em Gestão Pública e PPGP/UFRN)',
    participants:
      'Joaquim Caeiro (ISCSP/ULisboa - Portugal) e Hironobu Sano (UFRN)',
  },
  {
    date: '12/set',
    turn: '02 Tarde',
    type: 'Mesa Redonda',
    title:
      'Desmonte das Políticas Públicas no Brasil: desafios para sua reconstrução',
    responsible: 'Arlete Araújo',
    participants: 'Arlete Araújo, Marconi Macedo',
  },
  {
    date: '13/set',
    turn: '02 Tarde',
    type: 'Mesa Redonda',
    title:
      'As atividades da CONAB e o seu impacto no Estado do RN: inteligência agropecuária',
    responsible:
      'Grupos de Pesquisa em Gestão Institucional e Políticas Públicas',
    participants:
      'Marconi Neves Macedo (mediador), Marcos Frederico Carrera Simões (debatedor), Sebastião José de Arruda Júnior (debatedor)',
  },
  {
    date: '14/set',
    turn: '01 Manhã',
    type: 'Mesa Redonda',
    title:
      'Pessoas trans e mercado de trabalho: cenário, desafios e perspectivas',
    responsible: 'Antonio Alves',
    participants:
      'Antônio Alves (UFRN), Thais Godeiro (SEPLAN/RN) e Rebecka de França (SEMJIDH/RN).',
  },
  {
    date: '14/set',
    turn: '03 Noite',
    type: 'Mesa Redonda',
    title:
      'Estratégias de Inovação no Setor Público: o papel dos Laboratórios de Inovação- Ciclo de Debates em Administração Pública',
    responsible:
      'Thiago Dias e Hironobu Sano (Núcleo de Inovação em Gestão Pública e PPGP/UFRN)',
    participants:
      'James Batista Vieira (UFPB), Thiago Dias (UFRN) e Hironobu Sano (UFRN)',
  },
  {
    date: '14/set',
    turn: '02 Tarde',
    type: 'Oficina',
    title: 'Qualidade de Vida e Bem-estar no trabalho',
    responsible: 'Antonio Alves ',
    participants: 'Antonio Alves ',
  },
  {
    date: 'A definir',
    turn: '02 Tarde',
    type: 'Oficina',
    title: 'Design Science Research: um método de pesquisa inovador',
    responsible:
      'Grupos de Pesquisa em Gestão Institucional e Políticas Públicas',
    participants: 'Maria Teresa Pires Costa',
  },
  {
    date: 'A definir',
    turn: '03 Noite',
    type: 'Oficina',
    title:
      'Revisão integrativa de literatura para decisões baseadas em evidências',
    responsible:
      'Grupos de Pesquisa em Gestão Institucional e Políticas Públicas',
    participants: 'Maria Teresa Pires Costa',
  },
]
