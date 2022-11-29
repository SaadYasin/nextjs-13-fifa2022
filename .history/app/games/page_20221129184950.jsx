import React from 'react'

const GamesPage = asy() => {
  const response = await fetch("http://api.cup2022.ir/api/v1/standings", {
    headers: {
      authorization: process.env.API_KEY ?? "",
    },
    next: {
      revalidate: 10,
    },
  });

  const standings = (await response.json()).data;
  return (
    <div>GamesPage</div>
  )
}

export default GamesPage;