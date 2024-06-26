import clsx from 'clsx'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import 'normalize.css/normalize.css'
import { Navbar } from '@/components/Navbar'
import './globals.scss'
import styles from './layout.module.scss'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-inter',
})
const notoJp = Noto_Sans_JP({
  subsets: ['latin-ext'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Pet | AI文章最適化プラットフォーム',
  description:
    'AIとアンケートシステムを組み合わせた、ターゲットの好む文章ベースに改善できるプラットフォームです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={clsx(notoJp.variable, inter.variable, styles.layoutBase)}
      >
        <Navbar showContent={true} />
        {children}
      </body>
    </html>
  )
}
