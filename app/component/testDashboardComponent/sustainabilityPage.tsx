import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import EUILineChart from './lineCharts'
import EnergyEfficiencyCharts from './barChartPage'
import { MainDashboardProps } from '../../../types/index'

const SustainabilityPage = ({setShowSideBar, showSideBar}:MainDashboardProps) => {
    return (
        <div className={'w-full flex items-start justify-end py-[10px] pb-[20px]  px-[20px] min-h-[100vh] bg-slate-200 overflow-y-auto'}>
            <div className={showSideBar ? "right-bar flex" : "full-right-bar flex"}>

                <div className="w-full flex flex-col items-start justify-start gap-[20px] ">
                    {/* the header */}
                    <div className="w-full h-[50px] flex flex-row items-center justify-start gap-[20px] bg-white rounded-[5px] pl-[5px]">
                        {!showSideBar && <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[5px] bg-slate-500 text-slate-100 cursor-pointer hover:bg-slate-600 hover:text-slate-200 " onClick={()=> setShowSideBar(true)} >
                            <FaCaretRight size={25}  />
                        </div>}

                        <span className="w-full  h-[50px] rounded-[5px]  flex items-center justify-start">
                            <p className="text-xl font-semibold text-violet-800">Sustainability</p>
                        </span>
                    </div>

                    <div className="chart-holder">
                        <p className="text-lg font-semibold text-violet-600">EUI Chart</p>
                        <span className='h-[300px] w-full pb-[5px] '>
                            <EUILineChart />
                        </span>
                    </div>

                    <EnergyEfficiencyCharts />

                </div>

            </div>
        </div>
    )
}

export default SustainabilityPage