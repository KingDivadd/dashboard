'use client'
import React, {useState, useEffect} from 'react'
import MainDashboardPage from './mainDashboardPage'
import SideBar from './sideBar'
import EnergyEfficiencyPage from './energyEfficiencyPage'
import ComfortAndHealthPage from './comfortAndHealthPage'
import SustainabilityPage from './sustainabilityPage'
// import EngagementPage from './engagementPage'
import Engagement from './engagement'
import PerceptionPage from './perceptionPage'
import BehaviouralPage from './behaviouralPage'
import UseabilityPage from './useabilityPage'
import TouchpointMap from './touchpointMap'
import OccupancyMap from './occupancyMap'
import CirculationMap from './circulationMap'
import ContactAdaa from './contactAdaa'
import ReportSummary from './reportSummary'
import GenerateReport from './generateReport'
import Image from 'next/image'



const MainDashboard = () => {
    const [showSideBar, setShowSideBar] = useState(true)
    const [selectedPage, setSelectedPage] = useState('dashboard')     
    const [loading, setLoading] = useState(true)   

    setTimeout(() => {
        setLoading(false)
    }, 2500);
    
    useEffect(() => {
        console.log(selectedPage)
    }, [selectedPage])

    return (
        <div className="w-full h-[100vh] flex flex-row items-start justify-start relative">
            {loading && <div className="h-full w-full absolute inset-0 filter rounded-[5px] z-[1000] ">
                <Image 
                    src="/main-logo.png" 
                    alt="Main Logo" 
                    layout="fill" 
                    objectFit="cover" 
                    className='rounded-[5px]'
                />
            </div>}
                
            {!loading && 
            <div className="w-full h-full">

                {showSideBar && <div className="absolute top-0 left-0 h-[100vh] w-[300px] h-full flex flex-col items-start justify-start bg-slate-500  z-10">
                    <div className="w-full h-full flex items-center justify-center bg-slate-600 text-white">
                        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>}
                <div className="w-full h-full flex flex-col items-start justify-start bg-white  ">

                    {(selectedPage == 'dashboard' || selectedPage == 'building_performance' || selectedPage == 'building_behaviour' ) && <MainDashboardPage showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}

                    {selectedPage === 'energy-efficiency' && <EnergyEfficiencyPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  /> }

                    {selectedPage == 'comfort-and-health' && <ComfortAndHealthPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'sustainability' && <SustainabilityPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'engagement' && <Engagement showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}


                    {selectedPage == 'useability' && <UseabilityPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'perception' && <PerceptionPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'behavioural' && <BehaviouralPage showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}
                    
                    {selectedPage == 'touchpoint-map' && <TouchpointMap showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'occupancy-map' && <OccupancyMap showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'circulation-map' && <CirculationMap showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'generate_report' && <GenerateReport showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'report_summary' && <ReportSummary showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                    {selectedPage == 'contact' && <ContactAdaa showSideBar={showSideBar} setShowSideBar={setShowSideBar}  />}

                </div>
            </div>}
        </div>
    )
}

export default MainDashboard