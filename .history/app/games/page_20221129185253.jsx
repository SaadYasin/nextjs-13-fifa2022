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
    <div>MatchesPage</div>

    {/* <pre>{JSON.stringify(standings, null, 2)}</pre>
  )
}

export default MatchesPage;