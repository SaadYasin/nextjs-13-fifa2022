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
  
  const standings = 
  return (
    <div>StandingPage</div>
  )
}

export default StandingPage