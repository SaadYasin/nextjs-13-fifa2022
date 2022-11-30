import React from 'react'

const MatchRow = ({ match }) => {
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
  return
  <div classNameName="h-14 w-[23rem] bg-slate-300 rounded-full">
    <div class="flex justify-between items-center">
      <div class="flex justify-center  items-center gap-1 text-white w-24 h-14 bg-rose-900 rounded-tl-full rounded-bl-full">
        <p>flag</p>
        <p class="text-xs">KSA</p>
      </div>

      <p>2</p>

      <div class="flex flex-col gap-y-3">
        <p class="text-xs">Group A</p>
        <p class="text-xs">Nov, 2022</p>
      </div>

      <p>1</p>

      <div class="flex justify-center items-center gap-1 text-white w-24 h-14 bg-rose-900 rounded-tr-full rounded-br-full">
        <p class="text-xs">GB</p>
        <p>flag</p>
      </div>
    </div>
  </div>;
};

export default MatchRow;