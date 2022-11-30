import React from 'react'
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
    <div className="h-14 w-[23rem] bg-slate-300 rounded-full ">
      <div className="flex justify-between items-center">
        <div className="flex justify-center  items-center gap-1 text-white w-24 h-14 bg-rose-900 rounded-tl-full rounded-bl-full">
          <p>flag</p>
          <p className="text-xs">KSA</p>
        </div>

        <p>2</p>

        <div className="flex flex-col gap-y-3">
          <p className="text-xs">Group A</p>
          <p className="text-xs">Nov, 2022</p>
        </div>

        <p>1</p>

        <div className="flex justify-center items-center gap-1 text-white w-24 h-14 bg-rose-900 rounded-tr-full rounded-br-full">
          <p className="text-xs">GB</p>
          <p>flag</p>
        </div>
      </div>
    </div>
  );
}

export default MatchSection;