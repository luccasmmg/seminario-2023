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
          </div>
        </Container>
      </main>
      <Footer />
    </>
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
              {thisSessionActivities.map((activity) => (
                <div className="flex flex-col gap-y-2 py-4" key={activity._id}>
                  <h5
                    className={`text-2xl font-bold capitalize tracking-tight text-red-900 ${unna.className}`}
                  >
                    {activity.data.title.toLowerCase()}
                  </h5>
                  <h6 className={`max-w-2xl lg:max-w-3xl`}>
                    <span className="font-bold">Propositores:</span>{' '}
                    {activity.data.ofProposersUsers
                      .map((user) => `${user.name} (${user.email})`)
                      .join(', ')}
                  </h6>
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
              ))}
            </>
          )
        })}
    </>
  )
}