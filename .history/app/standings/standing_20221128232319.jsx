import React from 'react'

const StandingSection = ({ standing }) => {
  const { _id, group, teams } = standing;
  return (
    <div className='p-2 shadow bg-gray-50 rounded-lg'>
      <div className="grid grid-cols-7 text-xs"></div>
    </div>
  )
}

export default StandingSection