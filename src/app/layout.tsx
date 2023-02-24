import { Footer } from './footer';
import './globals.css';
import { Header } from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='text-white bg-slate-800'>
        <Header />
        <div className='mx-3 md:mx-auto md:max-w-5xl'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
