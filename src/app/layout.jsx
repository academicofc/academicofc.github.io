import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://academicofc.github.io'),
  title: {
    template: '%s - Hóquei em patins Académico FC',
    default:
      'Hóquei em patins Académico FC',
  },
  description: 'Campo de Férias Hóquei em Patins no Académico FC 2025. Vem patinar connosco nas férias!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
