import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import cartazImage from '@/images/cartaz.jpeg'

function CalendarDaysIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
  )
}

function CalendarDateRangeIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function GlobeAltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function PencilSquareIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function CurrencyEuroIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

export const metadata = {
  title: 'Campo de Férias Hóquei em Patins no Académico FC 2025',
  description: 'Campo de Férias Hóquei em Patins no Académico FC 2025. Vem patinar connosco nas férias!',
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[min-content_min-content_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-s px-2.5 lg:max-w-none">
            <Image
              src={cartazImage}
              alt="Cartaz do Campo de Férias Hóquei em Patins no Académico FC 2025"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-[2/3] rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Campo de Férias Hóquei em Patins no Académico FC 2025
          </h1>
        </div>
        <div className="lg:order-first lg:row-span-2 space-y-7">
          <h2 className="text-2xl tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Vem patinar connosco nas férias!
          </h2>
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>🛑 As inscrições para as Férias com Hóquei 2025 estão encerradas. Obrigado a todos os participantes!</p>
            <p>
              O Académico Futebol Clube vai transformar o seu pavilhão no coração
              do Porto num espaço cheio de energia, diversão e... stick na mão!
              Chegam as “Férias com Hóquei” — um campo de férias para crianças
              dos 6 aos 14 anos, com ou sem experiência na modalidade.
            </p>
            <p>
              Durante duas semanas, vamos juntar o melhor do hóquei em patins
              com jogos, oficinas e muita animação para criar memórias que duram
              o verão todo!
            </p>
          </div>
          <h2 id="calendario" className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <CalendarDaysIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Calendário</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Este ano a secção de Hóquei em Patins do Académico Futebol Clube
            tem programadas 2 semanas de Academias, abertas a todos os interessados,
            tanto atletas internos como externos, a começar dia 30 de junho com o
            seguinte calendário:
          </p>
          <ul role="list">
            <li className="flex">
              <CalendarDateRangeIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">Semana 1: 30 de junho a 4 de julho</span>
            </li>
            <li className="mt-4 flex">
              <CalendarDateRangeIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">Semana 2: 7 a 11 de julho</span>
            </li>
          </ul>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Podes inscrever-te numa ou nas duas semanas!
          </p>
          <h2 id="horario" className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <ClockIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Horário</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Os nossos dias serão organizados da seguinte forma:
          </p>
          <ul role="list">
            <li className="flex">
              <ClockIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">10:00 - 12:00 Treinos de hóquei em patins com treinadores do clube</span>
            </li>
            <li className="mt-4 flex">
              <ClockIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">12:00 - 12:30 Oficinas temáticas (valores do desporto, nutrição, arbitragem, etc.)</span>
            </li>
            <li className="mt-4 flex">
              Almoço (existe possibilidade de almoço nas instalações, com supervisão, e têm um custo adicional de 6,50€/dia)
            </li>
            <li className="mt-4 flex">
              <ClockIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">14:00 - 16:30 Atividades lúdicas (jogos tradicionais, desafios de equipa, etc.)</span>
            </li>
            <li className="mt-4 flex">
              <ClockIcon className="h-6 w-6 flex-none" />
              <span className="ml-4">16:30 - 17:00 Lanche e fecho do dia</span>
            </li>
          </ul>
          <p className="text-sm italic">
            Nota: O plano de atividades detalhado será divulgado oportunamente.
          </p>
          <h2 id="inscricao" className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <CurrencyEuroIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Valor da Inscrição</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Consulta os valores de inscrição para participares:
          </p>
          <ul className="text-sm text-zinc-600 dark:text-zinc-400" role="list">
            <li>40€ por semana</li>
            <li>70€ para quem se inscrever nas duas semanas</li>
          </ul>
          <p className="text-sm italic">
            Nota: Almoços não incluídos (existe possibilidade de almoço nas instalações, com supervisão, e têm um custo adicional de 6.50€/dia).
          </p>
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Para quem?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Crianças dos 6 aos 14 anos — com ou sem experiência em hóquei!
          </p>
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Equipa Técnica
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Treinadores da secção de hóquei do AFC, monitores de apoio e convidados especiais.
          </p>
          <p className="text-sm italic">
            Nota: O número limite de inscritos por semana, está condicionado em função da disponibilidade dos treinadores.
          </p>
          <h2 id="localizacao" className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MapPinIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Localização</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Rua de Costa Cabral 182, 4200-208 Porto
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.6786605608095!2d-8.60462272386349!3d41.16336267132922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464590bd72d87%3A0x2fe12e0108ea06e0!2sAcad%C3%A9mico%20Futebol%20Club!5e0!3m2!1sen!2spt!4v1748272122396!5m2!1sen!2spt" className="w-full aspect-[3/2]" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="lg:pl-20">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <PencilSquareIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Inscrições</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Temos programadas 2 semanas de Academias com o seguinte calendário:
            </p>
            <ul className="mt-4" role="list">
              <li className="flex">
                <CalendarDateRangeIcon className="h-6 w-6 flex-none" />
                <span className="ml-4">Semana 1: 30 de junho a 4 de julho</span>
              </li>
              <li className="mt-4 flex">
                <CalendarDateRangeIcon className="h-6 w-6 flex-none" />
                <span className="ml-4">Semana 2: 7 a 11 de julho</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Estes são os valores para a inscrição:
            </p>
            <ul className="mt-4" role="list">
              <li className="flex">
                <CurrencyEuroIcon className="h-6 w-6 flex-none" />
                <span className="ml-4">40€ por semana</span>
              </li>
              <li className="mt-4 flex">
                <CurrencyEuroIcon className="h-6 w-6 flex-none" />
                <span className="ml-4">70€ para quem se inscrever nas duas semanas</span>
              </li>
            </ul>
            <p className="mt-4 text-sm italic">
              Nota: Almoços não incluídos (existe possibilidade de almoço nas instalações, com supervisão, e têm um custo adicional de 6,50€/dia).
            </p>
            <p className="mt-4 text-sm italic">
              Nota 2: O número limite de inscritos por semana, está condicionado em função da disponibilidade dos treinadores.
            </p>
            <Button disabled target="_blank" href="https://forms.gle/fkCfLn6WucibpfuCA" variant="primary" className="group mt-6 w-full">
              Inscrições encerradas
              <PencilSquareIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
          <ul role="list">
            <li className="mt-8 flex">
              <Link
                href="mailto:hoqueiempatins.academicofc@gmail.com"
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-500"
              >
                <MailIcon className="h-6 w-6 flex-none transition dark:fill-zinc-200 group-hover:fill-amber-500" />
                <span className="ml-4">hoqueiempatins.academicofc@gmail.com</span>
              </Link>
            </li>
            <li className="mt-8 flex">
              <Link target="_blank"
                href="https://www.academicofc.pt/"
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-500"
              >
                <GlobeAltIcon className="h-6 w-6 flex-none transition fill-none" />
                <span className="ml-4">Académico Futebol Clube</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
