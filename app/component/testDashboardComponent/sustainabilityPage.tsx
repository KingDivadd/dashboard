import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import { WasteManagementLineChart } from './lineCharts'
import { MainDashboardProps } from '../../../types/index'
import { WUIBarChart } from './barCharts';

const SustainabilityPage = ({setShowSideBar, showSideBar}:MainDashboardProps) => {
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
                            <p className="text-xl font-semibold text-slate-700">Sustainability</p>
                        </span>
                    </div>

                    <div className="chart-holder">
                        <p className="text-lg font-semibold text-slate-700">Water Use Intensity (WUI) Bar Chart</p>
                        <span className='h-[350px] w-full  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                            <WUIBarChart />
                            <span className="w-full h-[3px] bg-red-200 border-b border-slate-100"></span>
                        </span>
                    </div>

                    <div className="chart-holder">
                        <p className="text-lg font-semibold text-slate-700">Waste Management Line Chart</p>
                        <span className=' w-full h-[350px]  bg-slate-600 border border-slate-500 rounded-[5px] p-[10px] '>
                            <WasteManagementLineChart />
                        </span>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default SustainabilityPage