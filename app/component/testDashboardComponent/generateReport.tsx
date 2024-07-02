'use client'
import { MainDashboardProps } from '../../../types/index'
import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import EUILineChart, { WasteManagementLineChart, ReturnVisitRateChart, WayfindingEfficiencyTable, AverageTravelTimeTable } from './lineCharts'
import Image from 'next/image'
import EnergyEfficiencyCharts from './barChartPage'
import {  ActiveAreaRatioChart, LightingLevelsBarChart, TimeSpentInAreasChart, WUIBarChart } from './barCharts';

const GenerateReport = ({setShowSideBar, showSideBar}:MainDashboardProps) => {
    return (
        <div className={'w-full flex items-start justify-end py-[10px]  px-[10px] min-h-[100vh] bg-slate-200 overflow-y-auto'}>
            <div className={showSideBar ? "right-bar flex" : "full-right-bar flex"}>

                <div className="w-full flex flex-col items-start justify-start gap-[20px] overflow-y-auto  ">
                    {/* the header */}
                    <div className="w-full  bg-red-20 flex flex-row items-center justify-start gap-[20px] rounded-[5px] pl-[5px]">
                        {!showSideBar && 
                        <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[5px] bg-slate-500 text-slate-100 cursor-pointer hover:bg-slate-600 hover:text-slate-200 " onClick={()=> setShowSideBar(true)} >
                            <FaCaretRight size={25}  />
                        </div>}

                        <span className="w-full  h-[85px] rounded-[5px]  flex flex-col items-strt justify-center gap-[5px]">
                            <p className="text-xl font-semibold text-slate-700">Post-Occupancy Evaluation Report</p>
                            <p className="text-sm font-semibold text-slate-700">Building Management Service Company</p>
                            <span className="w-full h-[40px] flex items-center justify-between">
                                <p className="text-lg font-semibold text-slate-700">July 2, 2024</p>

                                <button className="h-full w-[100px] hover:bg-slate-6000px] rounded-[5px] flex items-center justify-center bg-slate-600 text-white hover:bg-slate-500 text-sm ">Download</button>

                            </span>
                        </span>
                        
                    </div>

                    <div className="w-full h-full flex items-center justify-center rounded-[5px]  p-[5px] overflow-y-auto">

                        <div className="w-full h-full  flex flex-col items-start justify-start gap-[20px]  relative rounded-[5px]">


                            <p className="text-lg font-semibold text-slate-700  ">Building Performance  </p>

                            <div className="chart-holder ">
                                <p className="text-md font-semibold text-slate-700">Energy Use Intensity (EUI) </p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <EUILineChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>
                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Lighting Levels Table</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <LightingLevelsBarChart />
                                </span>
                            </div>

                            <p className="text-lg font-semibold text-slate-700">Sustainability  </p>
                            <div className="chart-holder">
                                <p className="text-md font-semibold text-slate-700">Water Use Intensity (WUI)</p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <WUIBarChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-md font-semibold text-slate-700">Waste Management</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <WasteManagementLineChart />
                                </span>
                            </div>
                            
                        </div>

                    </div>

                    
                    
                </div>

            </div>
        </div>    )
}

export default GenerateReport