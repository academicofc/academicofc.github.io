import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
} from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group flex transition hover:text-amber-500 dark:hover:text-amber-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="https://www.facebook.com/AcademicoFCoficial/">
                  <FacebookIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500" />
                </NavLink>
                <NavLink href="https://www.instagram.com/academico.fc">
                  <InstagramIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500" />
                </NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Hóquei em patins Académico FC. Todos os direitos reservados.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
