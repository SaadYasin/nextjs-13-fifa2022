import Link from 'next/link';
import {DateTime} from 'luxon';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="container mx-auto">
        <nav className="bg-rose-800 h-36 p-8">
          <div className="flex flex-col items-center md:">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-black text-white">
                FIFA World Cup
              </h1>
            </Link>
            <h4 className="text-xl md:text-2xl font-black text-white">
              Qatar 2022
            </h4>
            <p className='text-sm text-white mt-4'>{DateTime.now().toLocaleString(DateTime.DATETIME_MED) }</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
