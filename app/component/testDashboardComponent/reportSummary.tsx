'use client'
import { MainDashboardProps } from '../../../types/index'
import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import EUILineChart, { WasteManagementLineChart, ReturnVisitRateChart, WayfindingEfficiencyTable, AverageTravelTimeTable, CO2LevelsLineChart, TemperatureLineChart, ActiveAreaRatioTable, ReturnVisitRateLineChart, WayfindingEfficiencyLineChart, PostOccupancySurveysChart } from './lineCharts'
import Image from 'next/image'
import EnergyEfficiencyCharts, { AverageTravelTimeBarChart, TimeSpentBarChart } from './barChartPage'
import {  ActiveAreaRatioChart, LightingLevelsBarChart, PerceivedSafetySurveysChart, TimeSpentInAreasChart, WUIBarChart } from './barCharts';

const ReportSummary = ({setShowSideBar, showSideBar}:MainDashboardProps) => {
    return (
        <div className={'w-full flex items-start justify-end py-[10px]  px-[10px] min-h-[100vh] bg-slate-200 overflow-y-auto'}>
            <div className={showSideBar ? "right-bar flex" : "full-right-bar flex"}>

                <div className="w-full flex flex-col items-start justify-start gap-[20px] overflow-y-auto ">
                    {/* the header */}
                    <div className="w-full pb-[10px] h-[50px] flex flex-row items-center justify-start gap-[20px] rounded-[5px] pl-[5px] border-b border-slate-300">
                        {!showSideBar && <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[5px] bg-slate-500 text-slate-100 cursor-pointer hover:bg-slate-600 hover:text-slate-200 " onClick={()=> setShowSideBar(true)} >
                            <FaCaretRight size={25}  />
                        </div>}

                        <span className="w-full  h-[50px] rounded-[5px]  flex items-center justify-start">
                            <p className="text-xl font-semibold text-slate-700">Report Summary</p>
                        </span>
                    </div>

                    <div className="w-full h-full flex items-center justify-center rounded-[5px]  p-[5px] overflow-y-auto ">

                        <div className="w-full h-full  flex flex-col items-start justify-start  relative rounded-[5px] gap-[20px] ">
                            <p className="text-lg font-semibold text-slate-700 ">1. Building Performance</p>

                            <div className="chart-holder ">
                                <p className="text-lg font-semibold text-slate-700">EUI </p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <EUILineChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">CO2 Levels </p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <CO2LevelsLineChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Temperature </p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <TemperatureLineChart />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Lighting Levels</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <LightingLevelsBarChart />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Water Use Intensity (WUI) Bar Chart</p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <WUIBarChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <p className="text-lg font-semibold text-slate-700  ">2. Building Behaviour</p>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Time Spent in Different Areas</p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <TimeSpentBarChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Average Travel Time Between Key Locations</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <AverageTravelTimeBarChart />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Return Visit Rate to Specific Spaces</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <ReturnVisitRateLineChart />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Active Area Ratio</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <ActiveAreaRatioTable />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Wayfinding Efficiency</p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <WayfindingEfficiencyLineChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Average Travel Time Between Key Locations</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <AverageTravelTimeBarChart />
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Post-Occupancy Surveys </p>
                                <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <PostOccupancySurveysChart />
                                    <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                                </span>
                            </div>

                            <div className="chart-holder">
                                <p className="text-lg font-semibold text-slate-700">Perceived Safety Surveys</p>
                                <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                                    <PerceivedSafetySurveysChart />
                                </span>
                            </div>


                           
2Building Behavior                                 

Engagement KPIs                                 |
|                             |
| - Usability KPIs                                  |
|   - Wayfinding Efficiency                         |
|   - Average Travel Time Between Key Locations     |
|   - Personalization Rate                          |
| - Perception KPIs                                 |
|   - Post-Occupancy Surveys                        |
|   - Net Promoter Score (NPS)                      |
|   - Perceived Safety Surveys                      |
|   - Employee Survey Data on Productivity & Well-being|
| - Behavioral KPIs                                 |
|   - Collaboration Space Utilization Rate          |
|   - Noise Complaint Rate  
                        </div>

                    </div>

                    
                    
                </div>

            </div>
        </div>    )
}

export default ReportSummary