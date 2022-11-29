import React from 'react';
import {orderBy} from ''
import TeamRow from './team-row';

const StandingSection = ({ standing }) => {
  const { _id, group, teams } = standing;
  return (
    <div className='w-[23rem] md:w-[30rem] px-1 py-2 shadow bg-gray-200 rounded-lg mt-8 mx-auto'>
      <div className="grid grid-cols-7 text-xs mx-auto">
        <p className='font-bold col-span-2'>Group {(group)}</p>
        <p className='mx-auto'>Played</p>
        <p className='mx-auto'>Won</p>
        <p className='mx-auto'>Lost</p>
        <p className='mx-auto'>Draw</p>
        <p className='mx-auto'>Points</p>
      </div>
      {/* <hr className='my-2' /> */}
      <div className='w-full h-px bg-rose-600 mt-2'></div>
      
      {/* {teams.map(team => <TeamRow team={team} key={team.name_en} />)} */}
      {teams.map(team => <TeamRow team={team} key={team.name_en} />)}
    </div>
  )
}

export default StandingSection;