import React from 'react'

const TeamRow = ({ team }) => {
  const { name_en, mp, w, l, d, pts, flag } = team;
  return (
    <div className='grid grid-cols-7 text-xs'>
      <div>
        <Image src={flag}
      </div>
    </div>
  )
}

export default TeamRow;