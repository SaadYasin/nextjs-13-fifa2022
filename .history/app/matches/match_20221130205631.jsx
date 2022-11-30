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
    <div>MatchSection</div>)
}

export default MatchSection;