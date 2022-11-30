import React from 'react'

const MatchSection = ({ match }) => {
  const { home_team_en, away_team_en, home_flag, away_flag, home_score, away_score, group, local_date } = match;
  return (
    <div className="h-14 w-[23rem] bg-slate-300 rounded-full">
      MatchSection</div>
  );
}

export default MatchSection;