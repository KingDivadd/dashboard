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



const MainDashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false)
    const [selectedPage, setSelectedPage] = useState('dashboard')        
    
    useEffect(() => {
        console.log(selectedPage)
    }, [selectedPage])

    return (
        <div className="w-full h-[100vh] flex flex-row items-start justify-start relative">
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

            </div>
        </div>
    )
}

export default MainDashboard