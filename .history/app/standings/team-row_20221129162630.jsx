import React from 'react';
import Image from 'next/image';

const TeamRow = ({ team }) => {
  const { name_en, mp, w, l, d, pts, flag } = team;
  return (
    <div className='grid grid-cols-7 text-xs'>
      <div className='flex items-center space-x-1 min-w-max text-xs mt-4 col-span-2'>
        <Image
          src={flag}
          alt={name_en}
          width={30}
          height={30}
        />
        <p>{ name_en}</p>
      </div>
      <p>{ mp }</p>
      <p>{ w }</p>
      <p>{ l }</p>
      <p>{ d }</p>
      <p>{ pts }</p>
    </div>
  )
}

export default TeamRow;