import Link from 'next/link';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body cla>
        <nav className="bg-rose-800 h-48 p-8">
          <div className='flex justify-center'>
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-black text-white">FIFA World Cup 2022</h1>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
