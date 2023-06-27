import Image from 'next/image'
import { Container } from '@/components/Container'
import { HeroCard } from './HeroCard'
import {
  CalendarIcon,
  CalendarDaysIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'

export function Hero() {
  const actions = [
    {
      title: 'Programação(Em breve)',
      href: '#',
      icon: <CalendarIcon className="h-6 w-6" />,
    },
    {
      title: 'Subeventos(Em breve)',
      href: '#',
      icon: <CalendarDaysIcon className="h-6 w-6" />,
    },
    {
      title: 'Inscreva-se',
      href: 'https://sigeva.ccsa.ufrn.br/event/649067933e3d350ff15a2522',
      icon: <UserPlusIcon className="h-6 w-6" />,
    },
    {
      title: 'Acesse',
      href: 'https://sigeva.ccsa.ufrn.br',
      icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />,
    },
  ]
  return (
    <div>
      <Container>
        <div>
          <div className="mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div>
              <Image
                width={1200}
                height={800}
                src="/big_logo.png"
                alt="Logo 25 Seminário do CCSA"
              />
            </div>
          </div>
          <h2 className="py-8 text-center text-3xl font-medium tracking-tight text-gray-700">
            11 a 15 de Setembro de 2023
          </h2>
        </div>
      </Container>
      <div className="bg-red-950">
        <Container>
          <div className="grid grid-cols-1 gap-3 py-12 md:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <HeroCard
                href={action.href}
                key={action.href}
                title={action.title}
                icon={action.icon}
              />
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 py-16 sm:grid-cols-2">
          <p className="text-justify text-base text-gray-600">
            <span className="font-bold">
              O 25º Seminário de Pesquisa do CCSA/UFRN – As controvérsias da
              inovação e tecnologia no mundo do trabalho
            </span>{' '}
            – evidencia a preocupação do Centro de Ciências Sociais Aplicadas em
            consolidar um espaço para discussão e socialização do conhecimento
            produzido nas diferentes áreas das ciências sociais aplicadas
            (Direito, Economia, Administração, Serviço Social, Ciências
            Contábeis, Turismo e Biblioteconomia)
          </p>
          <p className="text-justify text-base text-gray-600">
            Tem como objetivo tornar acessível à comunidade universitária a
            produção científica existente no CCSA por meio da divulgação dos
            trabalhos apresentados; estimular a comunidade acadêmica do CCSA
            para a prática da pesquisa; contribuir para o desenvolvimento da
            pesquisa e da reflexão teórico-metodológica no campo das Ciências
            Sociais Aplicadas; abrir espaço para interlocução com outras áreas
            do conhecimento.
          </p>
        </div>
      </Container>
    </div>
  )
}
