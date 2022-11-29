import React from 'react';
import StandingSection from './standing';

const StandingPage = async () => {
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
    <div className='bg-[#] grid grid-cols-1 md:grid-cols-2 gap-1 pb-4'>
      {standings.map(standing => <StandingSection standing={standing} key={standing._id} />)}
      {/* <pre>{JSON.stringify(standings, null, 2)}</pre> */}
    </div>
  );
}

export default StandingPage;