import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: 'Школа оклейки автомобилей | Екатеринбург',

  description: 'Обучение оклейке автомобилей пленкой в Екатеринбурге. Курсы для начинающих и профессионалов.',

}

export default function RootLayout({

  children,

}: {

  children: React.ReactNode

}) {

  return (

    <html lang="ru">

      <body className={inter.className}>{children}</body>

    </html>

  )

}