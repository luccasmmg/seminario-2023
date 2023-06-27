import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-7xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Inscrições até 30 de Agosto
          </h2>
          <p className="mt-4 text-justify text-lg text-gray-300">
            O Seminário de Pesquisa do CCSA utilizará a plataforma Sigeva
            (Sistema de Gestão de Eventos Acadêmicos), desenvolvida para
            suportar eventos do CCSA. Para efetuar inscrição no evento é
            necessário criar uma conta na plataforma que pode ser acessada pelo
            endereço{' '}
            <a className="underline" href="https://sigeva.ccsa.ufrn.br">
              https://sigeva.ccsa.ufrn.br
            </a>
            .{' '}
          </p>
          <p className="mt-4 text-justify text-lg text-gray-300">
            ATENÇÃO: Após criar uma conta no Sigeva deve-se fazer a inscrição na
            página do evento, que pode ser facilmente localizada na página
            inicial da plataforma. O usuário que não se inscrever no Sigeva e no
            evento não poderá ser citado como coautor em artigos, posteres e
            casos para ensino assim como não poderá ser inscrito como expositor
            em oficinas ou minicursos
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://sigeva.ccsa.ufrn.br"
              color="red"
              className="mt-6 !text-lg"
              aria-label="Acessar o Sigeva"
            >
              Acesse o Sigeva
              <ArrowTopRightOnSquareIcon className="ml-2 mt-0.5 h-6 w-6" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
