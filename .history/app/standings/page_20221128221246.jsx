import React from 'react'

const StandingPage = () => {
  const response = await fetch('http://api.cup2022.ir/v1/standings', {
    headers: {
        authorization: process.env.API_KEY ?? '',
      },
    }) 
  return (
    <div>StandingPage</div>
  )
}

export default StandingPage