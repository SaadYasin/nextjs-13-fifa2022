import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-red-500 font-bold'>
      <Link href="/">
        <button className='bg-rose-700 hover:bg-red-600 px-3 py-2 rounded-md text-white '>Standings</button>
      </Link>
    </div>
  )
}
