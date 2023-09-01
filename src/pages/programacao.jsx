import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Unna } from 'next/font/google'
import { workshopSessions } from 'data/workshops/sessions'
import { workshopActivities } from 'data/workshops/activities'
import { minicourseSessions } from 'data/minicourses/sessions'
import { minicourseActivities } from 'data/minicourses/activities'
import { roundtableSessions } from 'data/roundtables/sessions'
import { roundtableActivities } from 'data/roundtables/activities'
import { conferenceSessions } from 'data/conferences/sessions'
import { conferenceActivities } from 'data/conferences/activities'
import { posterPresentations } from 'data/posters/presentations'
import { posterSessions } from 'data/posters/sessions'
import { articlePresentations } from 'data/articles/presentations'
import { articleSessions } from 'data/articles/sessions'

const unna = Unna({ subsets: ['latin'], weight: '700' })

function formatDate(date) {
  const _date = new Date(date)
  return `${_date.toLocaleDateString('pt-BR')} ${_date.getHours()}:${
    _date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes()
  }`
}

function isPartOfSession(session, activity) {
  const activitySessions = activity.data.consolidation
    ? activity.data.consolidation.sessions.map((session) => session._id)
    : []
  const ispart = activitySessions.includes(session._id)
  return ispart
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
              Programação
            </h2>
          </div>
          <div className="py-8">
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto  max-w-2xl text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Conferências
              </h3>
              <ActivitiesList
                sessions={conferenceSessions}
                activities={conferenceActivities}
              />
            </div>
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto max-w-2xl  text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Mesas-Redondas
              </h3>
              <ActivitiesList
                sessions={roundtableSessions}
                activities={roundtableActivities}
              />
            </div>
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Oficinas
              </h3>
              <ActivitiesList
                sessions={workshopSessions}
                activities={workshopActivities}
              />
            </div>
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Minicursos
              </h3>
              <ActivitiesList
                sessions={minicourseSessions}
                activities={minicourseActivities}
              />
            </div>
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Posters (Parcial)
              </h3>
              {posterPresentations.map((presentation) => (
                <PresentationCard
                  key={presentation.id}
                  presentation={presentation}
                  sessions={posterSessions}
                />
              ))}
            </div>
            <div className="flex flex-col py-4">
              <h3
                className={`mx-auto  max-w-2xl text-4xl font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
              >
                Artigos (Parcial)
              </h3>
              {articlePresentations.map((presentation) => (
                <PresentationCard
                  key={presentation.id}
                  presentation={presentation}
                  sessions={articleSessions}
                />
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

function PresentationCard({ presentation, sessions }) {
  if (!presentation.data.consolidation) return <></>
  const dateTime = sessions.find((session) => {
    const found = presentation.data.consolidation.sessions.find(
      (_session) => _session === session._id
    )
    if (found) return true
    return false
  })
  return (
    <div className="flex flex-col gap-y-2 py-4">
      <h5
        className={`text-2xl font-bold capitalize tracking-tight text-red-900 ${unna.className}`}
      >
        {presentation.data.title.toLowerCase()}
      </h5>
      <h6 className={`max-w-2xl lg:max-w-3xl`}>
        <span className="font-bold">Propositores:</span>{' '}
        {presentation.data.authors
          .map((user) => `${user.name} (${user.email})`)
          .join(', ')}
      </h6>
      {dateTime && (
        <h6 className={`max-w-2xl lg:max-w-3xl `}>
          <span className="font-bold">Dia e hora:</span>{' '}
          {formatDate(dateTime.initialDate)} - {formatDate(dateTime.finalDate)}
        </h6>
      )}
      <h6 className={`max-w-2xl lg:max-w-3xl `}>
        <span className="font-bold">Local:</span>{' '}
        {presentation.data.consolidation
          ? presentation.data.consolidation.location
          : 'A definir'}
      </h6>
      <p className={`tracking-tight `}>
        <span className="font-bold">Abstrato: </span>
        {presentation.data.abstract}
      </p>
      <p className={`tracking-tight `}>
        <span className="font-bold">Palavras-chave: </span>
        {presentation.data.keyword}
      </p>
    </div>
  )
}

function ActivitiesList({ sessions, activities }) {
  return (
    <>
      {sessions
        .sort((a, b) => a.initialDate > b.initialDate)
        .map((session) => {
          const thisSessionActivities = activities.filter((activity) =>
            isPartOfSession(session, activity)
          )
          if (thisSessionActivities.length === 0) return null
          return (
            <>
              <div key={session.id} className="flex gap-x-2 py-4">
                <h4
                  className={`max-w-2xl  text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
                >
                  {formatDate(session.initialDate)}
                </h4>
                <h4
                  className={`max-w-2xl  text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
                >
                  -
                </h4>
                <h4
                  className={`max-w-2xl  text-4xl  font-medium tracking-tight text-slate-800 lg:max-w-3xl ${unna.className}`}
                >
                  {formatDate(session.finalDate)}
                </h4>
              </div>
              {thisSessionActivities.map((activity) => {
                const debaters = activity.data.ofFields.find((field) => {
                  return field.request.name === 'debaters'
                })
                return (
                  <div
                    className="flex flex-col gap-y-2 py-4"
                    key={activity._id}
                  >
                    <h5
                      className={`text-2xl font-bold capitalize tracking-tight text-red-900 ${unna.className}`}
                    >
                      {activity.data.title.toLowerCase()}
                    </h5>
                    {!debaters ? (
                      <h6 className={`max-w-2xl lg:max-w-3xl`}>
                        <span className="font-bold">Propositores:</span>{' '}
                        {activity.data.ofProposersUsers
                          .map((user) => `${user.name} (${user.email})`)
                          .join(', ')}
                      </h6>
                    ) : (
                      <h6 className={`max-w-2xl lg:max-w-3xl`}>
                        <span className="font-bold">Debatedores:</span>{' '}
                        {debaters.value}
                      </h6>
                    )}
                    <h6 className={`max-w-2xl lg:max-w-3xl `}>
                      <span className="font-bold">Local:</span>{' '}
                      {activity.data.consolidation
                        ? activity.data.consolidation.location
                        : 'A definir'}
                    </h6>
                    <h6 className={`max-w-2xl lg:max-w-3xl`}>
                      <span className="font-bold">Vagas:</span>{' '}
                      {activity.data.consolidation
                        ? activity.data.consolidation.vacancies
                        : 'Número ilimitado'}
                    </h6>
                    <p className={`tracking-tight `}>
                      <span className="font-bold">Ementa: </span>
                      {activity.data.syllabus}
                    </p>
                  </div>
                )
              })}
            </>
          )
        })}
    </>
  )
}
