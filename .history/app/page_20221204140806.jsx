import Image from 'next/image'
import Link from 'next/link'
import {Oswald} from

export default function Home() {
  return (
    <div className='flex justify-center items-center gap-10 p-4'>
      <Link href="/standings">
        <button className='bg-rose-700 hover:bg-red-900 px-3 py-2 rounded-md text-white font-bold uppercase'>Standings</button>
      </Link>

      <Link href="/matches">
        <button className='bg-rose-700 hover:bg-red-900 px-3 py-2 rounded-md text-white font-bold uppercase'>
          Matches List
        </button>
      </Link>
    </div>
  )
}
