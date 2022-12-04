
Skip to content
Pull requests
Issues
Codespaces
Marketplace
Explore
@SaadYasin
SaadYasin /
nextjs-13-fifa2022
Public

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

nextjs-13-fifa2022/app/standings/page.jsx /
@SaadYasin
SaadYasin commit003
Latest commit a92095a Nov 29, 2022
History
1 contributor
24 lines (20 sloc) 641 Bytes
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
    <div className='bg-[#9fac98] grid grid-cols-1 md:grid-cols-2 gap-1 pb-4'>
      {standings.map(standing => <StandingSection standing={standing} key={standing._id} />)}
      {/* <pre>{JSON.stringify(standings, null, 2)}</pre> */}
    </div>
  );
}

export default StandingPage;
Footer
© 2022 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

nextjs-13-fifa2022/page.jsx at main · SaadYasin/nextjs-13-fifa2022
