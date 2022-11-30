import React from 'react'
import Image from 'next/image'
import MatchRow from './match-row'

const MatchSection = ({ match }) => {
  const {
    home_team_en,
    away_team_en,
    home_flag,
    away_flag,
    home_score,
    away_score,
    group,
    local_date,
  } = match;

  return (
    <div className="h-14 w-[23rem] bg-slate-300 rounded-full mt-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center  items-center gap-1 text-white w-24 h-14 bg-[#7] rounded-tl-full rounded-bl-full">
          <Image src={home_flag} alt={home_team_en} width={30} height={30} />

          <p className="text-xs">{home_team_en}</p>
        </div>

        <p>{home_score}</p>

        <div className="flex flex-col items-center gap-y-3">
          <p className="text-xs">Group ({group})</p>
          <p className="text-xs">{local_date}</p>
        </div>

        <p>{away_score}</p>

        <div className="flex flex-col justify-center items-center gap-1 text-white w-24 h-14 bg-rose-900 rounded-tr-full rounded-br-full">
          <Image src={away_flag} alt={away_team_en} width={30} height={30} />
          <p className="text-xs">{away_team_en}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchSection;