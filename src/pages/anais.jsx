import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Unna } from 'next/font/google'
import { parsedArticles } from 'data/parsedArticles'
import { parsedPosters } from 'data/parsedPosters'
import { parsedTeachingCases } from 'data/parsedTeachingCases'
import { articlePresentations } from 'data/articles/presentations'
import { posterPresentations } from 'data/posters/presentations'
import { teachingCasePresentations } from 'data/teachingcases/presentations'

const unna = Unna({ subsets: ['latin'], weight: '700' })

function withTg(item, filetype) {
  const items =
    filetype === 'articles'
      ? articlePresentations
      : filetype === 'posters'
      ? posterPresentations
      : teachingCasePresentations
  const presentation = items.find((i) => i.data.title === item.title)
  return { ...item, tg: presentation?.data.thematicGroup.data.name }
}

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
              Anais
            </h2>
          </div>
          <div className="flex flex-col py-4">
            <h3
              className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Artigos
            </h3>
            {parsedArticles
              .map((i) => withTg(i, 'articles'))
              .sort((a, b) => a.tg.localeCompare(b.tg))
              .map((item) => (
                <WorkCard key={item.title} item={item} fileType="articles" />
              ))}
          </div>
          <div className="flex flex-col py-4">
            <h3
              className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Posters
            </h3>
            {parsedPosters
              .map((i) => withTg(i, 'posters'))
              .sort((a, b) => a.tg.localeCompare(b.tg))
              .map((item) => (
                <WorkCard key={item.title} item={item} fileType="posters" />
              ))}
          </div>
          <div className="flex flex-col py-4">
            <h3
              className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
            >
              Casos para ensino
            </h3>
            {parsedTeachingCases
              .map((i) => withTg(i, 'teachingcases'))
              .sort((a, b) => a.tg.localeCompare(b.tg))
              .map((item) => (
                <WorkCard
                  key={item.title}
                  item={item}
                  fileType="teachingcases"
                />
              ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

function WorkCard({ item, fileType }) {
  return (
    <div className="flex flex-col gap-y-2 py-4">
      <h5
        className={`text-2xl font-bold tracking-tight text-red-900 ${unna.className}`}
      >
        {item.title}
      </h5>
      <h6 className={`max-w-2xl lg:max-w-3xl`}>
        <span className="font-bold">Autores:</span> {item.authors}
      </h6>
      <p className={`tracking-tight `}>
        <span className="font-bold">Abstrato: </span>
        {item.abstract}
      </p>
      <p className={`tracking-tight `}>
        <span className="font-bold">Grupo Temático: </span>
        {item.tg}
      </p>
      <p className={`tracking-tight `}>
        <span className="font-bold">Palavras-chave: </span>
        {item.keyword}
      </p>
      <p className={`tracking-tight `}>
        <span className="font-bold">Arquivo: </span>
        <a href={`/${fileType}/${item.filename}`}>Download</a>
      </p>
    </div>
  )
}
