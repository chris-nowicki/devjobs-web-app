import './globals.css'
import Providers from './Providers'

import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
    subsets: ['latin'],
    variable: '--font-kumbh',
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={kumbh.variable}>
            <body className='dark:bg-blue-200'>
                <div className="flex flex-col items-center">
                    <Providers>
                        <main className="">
                            {children}
                        </main>
                    </Providers>
                </div>
            </body>
        </html>
    )
}
