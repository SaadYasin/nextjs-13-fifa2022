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
    div
  );
}

export default StandingPage;