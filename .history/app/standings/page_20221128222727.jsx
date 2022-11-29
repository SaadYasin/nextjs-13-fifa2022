import React from 'react'

const StandingPage = async () => {
  const response = await fetch("http://api.cup2022.ir/api/v1/standings", {
    headers: {
      authorization:
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyN2EzZWY5YzMyYjNmNjM3ZTgzOTMiLCJpYXQiOjE2Njk0OTUzNTksImV4cCI6MTY2OTU4MTc1OX0.tPEGaCo6JwKFDaY5MC_yzRTCZy2c4R3NZkvF_1INvHI" ??
        "",
    },
    next: {
      revalidate: 10,
    },
  });

  const standings = await response.json();

  return (
    <div>
      StandingPage
      <pre>{JSON.stringify(standings, null, 2)}</pre>
    </div>
  );
}

export default StandingPage