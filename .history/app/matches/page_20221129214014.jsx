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
    <div className='flex flex-col i'>


      <pre>{JSON.stringify(matches, null, 2)}</pre>

    </div>

  )
}

export default MatchesPage;