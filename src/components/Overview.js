import React from 'react'
import OverviewButtons from './OverviewButtons'
import OverviewDashboard from './OverviewDashboard'
import Card from './OverviewCard'
import OverviewLfCard from './OverviewLfCard'
import OverviewChart from './OverviewChart'
// import NavBar from './navBar'
function Overview() {
  return (
    <div>
       <section className='flex  '>
          <OverviewDashboard/>
    <div className=' bg-violet-400 w-full'>
       {/* <NavBar/> */}
      <article className='flex m-10 space-x-8  justify-center'>
               < OverviewButtons/>
               < OverviewButtons/>
              < OverviewButtons/>
      </article>
<OverviewChart/>
      <section className='flex '>
    <Card/>
    <Card/>
<OverviewLfCard className='OverviewLfCard sm:hidden'/> 
    </section>
    <div>
   
    </div>
   
    </div>
    </section>
    </div>
  )
}

export default Overview
