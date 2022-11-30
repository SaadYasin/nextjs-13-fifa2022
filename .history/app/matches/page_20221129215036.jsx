import React from 'react'

const MatchesPage = async() => {
  const response = await fetch("http://api.cup2022.ir/api/v1/match", {
    headers: {
      authorization: process.env.API_KEY ?? "",
    },
    next: {
      revalidate: 10,
    },
  });

  const matches = (await response.json()).data;
  return (
    <div className='flex flex-col items-center py-4'>Matches Page
      {matches.map(match => <MatchSection  match={match} key={match._id}/> )}

      <pre>{JSON.stringify(matches, null, 2)}</pre>

    </div>

  )
}

export default MatchesPage;