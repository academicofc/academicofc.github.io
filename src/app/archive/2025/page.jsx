import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CalendarDaysIcon, CalendarDateRangeIcon, MailIcon, GlobeAltIcon, PencilSquareIcon, ClockIcon, CurrencyEuroIcon, MapPinIcon } from '@/components/Icons'
import { Header } from '@/components/Header'
import avatarImage from '@/images/avatar.jpg'
import cartazImage from '@/images/cartaz.jpeg'

export const metadata = {
  title: 'Campo de Férias Hóquei em Patins no Académico FC 2025',
  description: 'Campo de Férias Hóquei em Patins no Académico FC 2025. Vem patinar connosco nas férias!',
}

export default function Home() {
  return (
    <>
      <Header avatarImage={avatarImage} />
      <main className="flex-auto">
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
                <Button disabled target="_blank" variant="primary" className="group mt-6 w-full">
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

      </main>
    </>
  )
}
