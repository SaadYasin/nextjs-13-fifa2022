import React from 'react';
import TeamRow from './team-row';

const StandingSection = ({ standing }) => {
  const { _id, group, teams } = standing;
  return (
    <div className='w-[23rem]  p-2 shadow bg-gray-50 rounded-lg mt-8'>
      <div className="grid grid-cols-7 text-xs mx-auto">
        <p className='font-bold col-span-2'>Group {(group)}</p>
        <p className='mx-auto'>Played</p>
        <p className='mx-auto'>Won</p>
        <p className='mx-auto'>Lost</p>
        <p className='mx-auto'>Draw</p>
        <p className='mx-auto'>Points</p>
      </div>
      <hr className='my-2' />
      
      {teams.map(team => <TeamRow team={team} key={team.name_en} />)}
    </div>
  )
}

export default StandingSection;