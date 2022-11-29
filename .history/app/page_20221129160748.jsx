import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center p-4'>
      <Link href="/standings">
        <button className='bg-rose-700 hover:bg-red-600 px-3 py-2 rounded-md text-white font-bold uppercase'>Standings</button>
      </Link>
    </div>
  )
}
