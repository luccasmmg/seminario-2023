import Link from 'next/link'
import { Container } from './Container'
import { Unna } from 'next/font/google'

const unna = Unna({ subsets: ['latin'], weight: '700' })

function DownloadButton({ href, title, subtitle, centerItem = false }) {
  return (
    <Link href={href} passHref>
      <div className="group flex cursor-pointer flex-col items-start justify-center gap-y-1">
        <div
          className={`flex w-fit flex-col ${
            centerItem ? 'items-start md:items-center' : 'items-start'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 transition-all duration-500 ease-in-out group-hover:text-red-900"
          >
            <path
              fillRule="evenodd"
              d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
              clipRule="evenodd"
            />
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
          <span className="ml-2 text-sm font-semibold text-slate-800 transition-all duration-500 ease-in-out group-hover:text-red-900">
            {title}
          </span>
          {subtitle && (
            <span className="ml-2 text-sm font-semibold text-slate-800 transition-all duration-500 ease-in-out group-hover:text-red-900">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default function DownloadSection() {
  return (
    <Container className="pb-16">
      <h2
        className={`max-w-2xl text-6xl  font-medium tracking-tight text-red-900 lg:max-w-3xl ${unna.className}`}
      >
        Normas e templates
      </h2>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 items-start gap-x-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <DownloadButton title="Normas" href="/documents/normas.pdf" />
          <DownloadButton
            title="Template para Pôster"
            href="/documents/template_poster.pptx"
          />
          <DownloadButton
            title="Template para Artigo"
            href="/documents/template_artigo.docx"
          />
          <DownloadButton
            title="Template para Casos para Ensino"
            href="/documents/template_casos_para_ensino.docx"
          />
        </div>
      </div>
      <h2
        className={`max-w-2xl pt-12  text-6xl font-medium tracking-tight text-red-900 lg:max-w-3xl ${unna.className}`}
      >
        Créditos
      </h2>
      <div className="grid grid-cols-1 items-start gap-x-8 pt-8 sm:grid-cols-2 lg:grid-cols-8">
        <DownloadButton
          title="Créditos para Administração"
          href="/documents/resolutions/administracao.pdf"
        />
        <DownloadButton
          title="Créditos para Administração Pública"
          href="/documents/resolutions/administracao_publica.pdf"
        />
        <DownloadButton
          title="Créditos para Biblioteconomia"
          href="/documents/resolutions/biblioteconomia.pdf"
        />
        <DownloadButton
          title="Créditos para Ciências Contábeis"
          href="/documents/resolutions/contabeis.pdf"
        />
        <DownloadButton
          title="Créditos para Ciências Econômicas"
          href="/documents/resolutions/economia.pdf"
        />
        <DownloadButton
          title="Créditos para Direito"
          href="/documents/resolutions/direito.pdf"
        />
        <DownloadButton
          title="Créditos para Serviço Social"
          href="/documents/resolutions/servico_social.pdf"
        />
        <DownloadButton
          title="Créditos para Turismo"
          href="/documents/resolutions/turismo.pdf"
        />
      </div>
    </Container>
  )
}
