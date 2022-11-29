import React from 'react'

const StandingPage = async () => {
  const response = await fetch('http://api.cup2022.ir/v1/standings', {
    headers: {
        authorization: process.env.API_KEY ?? '',
    },
    next: {
      revalidate: 10
    },
  })
  
  const standings = await response.json();
  return (
    <div>
      StandingPage
    
      <pre>JSON.stringify(standings, )</pre>
    </div>
  )
}

export default StandingPage