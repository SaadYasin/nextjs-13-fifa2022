import React from 'react'

const StandingSection = ({ standing }) => {
  const { _id, group, teams } = standing;
  return (
    <div className='p-2 shadow bg-gray-50 rounded-lg'>
      <div className="grid grid-cols-7 text-xs">
        <p className='font-bold '>Group A</p>
        <p className='mx-auto'>Played</p>
        <p className='mx-auto'>Won</p>
        <p className='mx-auto'>Lost</p>
        <p className='mx-auto'>Draw</p>
        <p className='mx-auto'>Points</p>
      </div>
    </div>
  )
}

export default StandingSection