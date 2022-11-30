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
  return <div>MatchRow</div>;
};

export default MatchRow;