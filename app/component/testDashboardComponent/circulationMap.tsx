'use client'
import { MainDashboardProps } from '../../../types/index'
import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import EUILineChart, { WasteManagementLineChart, ReturnVisitRateChart, WayfindingEfficiencyTable, AverageTravelTimeTable } from './lineCharts'
import EnergyEfficiencyCharts from './barChartPage'
import {  ActiveAreaRatioChart, TimeSpentInAreasChart, WUIBarChart } from './barCharts';
import Image from 'next/image'

const CirulationMap = ({setShowSideBar, showSideBar}:MainDashboardProps) => {
    return (
        <div className={'w-full flex items-start justify-end py-[10px]  px-[10px] min-h-[100vh] bg-slate-200 overflow-y-auto'}>
            <div className={showSideBar ? "right-bar flex" : "full-right-bar flex"}>

                <div className="w-full flex flex-col items-start justify-start gap-[20px] overflow-y-auto ">
                    {/* the header */}
                    <div className="w-full h-[50px] flex flex-row items-center justify-start gap-[20px] rounded-[5px] pl-[5px]">
                        {!showSideBar && <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[5px] bg-slate-500 text-slate-100 cursor-pointer hover:bg-slate-600 hover:text-slate-200 " onClick={()=> setShowSideBar(true)} >
                            <FaCaretRight size={25}  />
                        </div>}

                        <span className="w-full  h-[50px] rounded-[5px]  flex items-center justify-start">
                            <p className="text-xl font-semibold text-slate-700">Circulation Map</p>
                        </span>
                    </div>

                    <div className="w-full h-full flex items-center justify-center rounded-[5px]  bg-slate-500 p-[5px]">

                    <div className="w-full h-full  flex items-center justify-center  relative rounded-[5px]">
                        <div className="h-full w-full absolute inset-0 filter rounded-[5px]  ">
                            <Image 
                                src="/circulation.png" 
                                alt="Touch Point" 
                                layout="fill" 
                                objectFit="cover" 
                                className='rounded-[5px]'
                            />
                        </div>
                    </div>

                    </div>

                    
                    
                </div>

            </div>
        </div>     )
}

export default CirulationMap