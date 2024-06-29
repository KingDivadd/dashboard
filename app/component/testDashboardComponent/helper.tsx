'use client'
import React from 'react'
import { TbBeta } from "react-icons/tb";
import { PiNumberZeroBold } from "react-icons/pi";
import { FaBoxArchive } from "react-icons/fa6";
import { TiSocialFlickrCircular } from "react-icons/ti";
import { MdOutlineBlurCircular } from "react-icons/md";
import DoughnutChart, { DoughnutChartThree, DoughnutChartFour, DoughnutChartFive, DoughnutChartSix, DoughnutChartSeven, DoughnutChartEight } from '../donutChart';
import { FaLeaf } from "react-icons/fa6";
import { TbGaugeFilled } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa6";
import { RiWaterFlashFill } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import { GiWindSlap } from "react-icons/gi";
import { SlEmotsmile } from "react-icons/sl";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoNavigateCircle } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { MdOutlineSpeed } from "react-icons/md";
import { IoLeaf } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";

export const Adaa = ()=>{

    return (
        <div className="w-[100px] h-full flex flex-col justify-between items-start">
            <p className="text-xl font-bold text-slate-600">ADAA</p>
            <span className="w-[90%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[80%] h-full bg-sky-300"></span>
            </span>
        </div>
    )
}

export const HirinaOpers = ()=>{

    return (
        <div className="w-[130px] h-full flex flex-col justify-between items-start">
            <p className="text-sm font-semibold text-slate-600">Energy Efficiency</p>
            <span className="w-[90%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[80%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const Ooplounrnce = ()=>{

    return (
        <div className="w-[150px] h-full flex flex-col justify-between items-start ">
            <p className="text-sm font-semibold text-slate-600">Energy Use Intensity</p>
            <span className="w-[80%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[60%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const Nomiumes = ()=>{

    return (
        <div className="w-[160px] h-full flex flex-col justify-between items-start ">
            <p className="text-sm font-semibold text-slate-600">System Performance</p>
            <span className="w-[65%] mx-auto h-[4px] flex items-start justify-end bg-slate-200">
                <span className="w-[60%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const BuilddMoangcailiy = ()=>{

    return (
        <div className="w-[130px] h-full flex flex-col justify-between items-start">
            <p className="text-sm font-semibold text-slate-600">Indoor Air Quality </p>
            <span className="w-full h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[60%] h-full bg-sky-500"></span>
            </span>
        </div>
    )
}

export const DciltHiopers = ()=>{

    return (
        <div className="w-[120px] h-full flex flex-col justify-between items-start">
            <p className="text-sm font-semibold text-slate-600">Lighting Levels</p>
            <span className="w-[80%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[70%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const Vorslatility = ()=>{

    return (
        <div className="w-[210px] h-full flex flex-col justify-between items-start ">
            <p className="text-sm font-semibold text-slate-600">Occupant Comfort & Health</p>
            <span className="w-[100%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[70%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const Empty = ()=>{

    return (
        <div className="w-[80px] h-full flex flex-col justify-between items-start">
            <p className="text-sm font-semibold text-slate-600"></p>
            <span className="w-[100%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[100%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const End = ()=>{

    return (
        <div className="w-[130px] h-full flex flex-col justify-between items-start">
            <button className="h-[25px] w-full rounded-[30px] text-[12px] bg-slate-600 text-white hover:bg-slate-500 ">Generate Report</button>
            <span className="w-[70%] h-[4px] flex items-start justify-start bg-slate-200">
                <span className="w-[40%] h-full bg-slate-400"></span>
            </span>
        </div>
    )
}

export const BarColumnOne = ()=>{

    return (
        <div className="w-full h-[10px] gap-[20px] flex flex-row item-center justify-between">
            <span className="h-full w-[15%] flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-100">Energy</p>
            </span>
            <span className="h-[80%] my-auto w-[85%] bg-slate-200 rounded-[2px]"></span>
        </div>
    )
}

export const BarColumnTwo = ()=>{

    return (
        <div className="w-full h-[10px] gap-[20px] flex flex-row item-center justify-between">
            <span className="h-full w-[15%] flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-100">Comfort</p>
            </span>
            <span className="h-[80%] my-auto w-[85%] bg-slate-100 flex flex-row items-center justify-start rounded-[2px]">
                <span className="w-[20%] h-full bg-slate-100 rounded-l-[2px]"></span>
                <span className="w-[15%] h-full bg-slate-300"></span>
                <span className="w-[15%] h-full bg-slate-100"></span>
                <span className="w-[20%] h-full bg-slate-300"></span>
            </span>
        </div>
    )
}

export const BarColumnThree = ()=>{

    return (
        <div className="w-full h-[10px] gap-[20px] flex flex-row item-center justify-between">
            <span className="h-full w-[15%] flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-100">Lighting</p>
            </span>
            <span className="h-[80%] my-auto w-[85%] bg-slate-100 flex flex-row items-center justify-start rounded-[2px]">
                <span className="w-[15%] h-full bg-slate-300 rounded-l-[2px]"></span>
                <span className="w-[15%] h-full bg-slate-100"></span>
                <span className="w-[50%] h-full bg-slate-300"></span>
                <span className="w-[20%] h-full bg-slate-100 rounded-r-[2px]"></span>
            </span>
        </div>
    )
}

export const BarColumnFour = ()=>{

    return (
        <div className="w-full h-[10px] gap-[20px] flex flex-row item-center justify-between">
            <span className="h-full w-[15%] flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-100">Waste </p>
            </span>
            <span className="h-[80%] my-auto w-[85%] bg-slate-100 flex flex-row items-center justify-start rounded-[2px]">
                <span className="w-[40%] h-full bg-slate-300 rounded-l-[2px]"></span>
                <span className="w-[60%] h-full bg-slate-100 rounded-r-[2px]"></span>
            </span>
        </div>
    )
}

export const BarColumnFive = ()=>{

    return (
        <div className="w-full h-[10px] gap-[20px] flex flex-row item-center justify-between">
            <span className="h-full w-[15%] flex items-center justify-between">
                <p className="text-[12px] font-semibold text-slate-100">WUI</p>
            </span>
            <span className="h-[70%] my-auto w-[85%] bg-slate-100 flex flex-row items-center justify-start rounded-[2px]">
                <span className="w-[25%] h-full bg-slate-100 rounded-l-[2px]"></span>
                <span className="w-[40%] h-full bg-slate-300"></span>
                <span className="w-[35%] h-full bg-slate-100"></span>
            </span>
        </div>
    )
}

export const BuildingPerformanceBottomLeftOne = ()=>{

    return (
        <div className="w-[44%] h-full flex flex-col items-start justify-center ">
            <p className="text-[10px] text-white">Energy Use Intensity (EUI)</p>
            <p className="text-[11px] text-white">Metered System Performance</p>
            <p className="text-[10px] text-white">Indoor Air Quality (IAQ)</p>
        </div>
    )
}

export const BuildingPerformanceBottomLeftTwo = ()=>{

    return (
        <div className="w-[13%] h-full flex flex-row items-center justify-center ">
            <TbGaugeFilled size={23} className='text-slate-100' />
            <p className="text-slate-100 text-[11px] ">10f</p>
        </div>
    )
}


export const BuildingPerformanceBottomLeftThree = ()=>{
    
    return (
        <div className="w-[30%] h-full flex flex-col items-start justify-center ">
            <p className="text-[10px] text-white">Lighting Levels.</p>
            <p className="text-[11px] text-white">Water Use Intensity</p>
            <p className="text-[10px] text-white">Waste Management.</p>
        </div>
    )
}

export const BuildingPerformanceBottomLeftFour = ()=>{

    return (
        <div className="w-[13%] h-full flex flex-row items-center justify-start gap-1 ">
            <FaLeaf className='text-slate-100' size={25} />
            <p className="text-[11px] text-slate-100">327</p>
        </div>
    )
}

export const BuildingPerformanceCenterBottomLeftOne = ()=>{

    return (
        <div className="h-full flex flex-row items-center justify-start gap-1">
            <FaLightbulb size={20}className='text-slate-100' />
            <RiWaterFlashFill size={22}className='text-slate-100' />
            <ImBin2 size={22}className='text-slate-100' />
            <span className="h-full flex flex-col items-start justify-center">
                <p className="text-slate-100 text-[9px] h-[9px] ">Energy Efficiency</p>
                <p className="text-slate-100 text-[9px] h-[9px] ">Water Conservation</p>
            </span>
        </div>
    )
}
export const BuildingPerformanceCenterBottomLeftTwo = ()=>{

    return (
        <div className="h-full flex flex-row items-center justify-start gap-1">
            <GiWindSlap size={20}className='text-slate-100' />
            <FaLightbulb size={21}className='text-slate-100' />
            <SlEmotsmile size={20}className='text-slate-100' />
            <span className="h-full flex flex-col items-start justify-center">
                <p className="text-slate-100 text-[9px] h-[9px] ">Air Quality</p>
                <p className="text-slate-100 text-[9px] h-[9px] ">Occupant Comfort</p>
            </span>
        </div>
    )
}

export const BuildingPerformanceCenterBottomLeftThree = ()=>{

    return (
        <div className="h-full flex flex-row items-center justify-start gap-1">
            <FaHandshakeAngle size={20}className='text-slate-100' />
            <IoNavigateCircle size={21}className='text-slate-100' />
            <IoMdLock size={20}className='text-slate-100' />
            <span className="h-full flex flex-col items-start justify-center">
                <p className="text-slate-100 text-[9px] h-[9px] ">Collaboration Spaces</p>
                <p className="text-slate-100 text-[9px] h-[9px] ">Safety and Security</p>
            </span>
        </div>
    )
}

export const BuildingPerformanceCenterBottomLeftFour = ()=>{

    return (
        <div className="h-full flex flex-row items-center justify-start gap-1">
            <MdOutlineSpeed size={20}className='text-slate-100' />
            <IoLeaf size={21}className='text-slate-100' />
            <FiBarChart size={20}className='text-slate-100' />
            <span className="h-full flex flex-col items-start justify-center">
                <p className="text-slate-100 text-[9px] h-[9px] ">Efficiency</p>
                <p className="text-slate-100 text-[9px] h-[9px] ">Productivity</p>
            </span>
        </div>
    )
}

export const CompanyOverOne = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px]   border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] border-[3px] border-slate-700 flex flex-col justify-between items-center pt-[5px] pb-[12px] relative ">
                    <span className="@apply w-[90px] h-[45px] rounded-t-[90px]  border-[3px] border-b-0 border-slate-700 flex items-end justify-center pb-[5px] ">
                    </span>
                    <span className="@apply w-[75px] h-[37.5px] rounded-b-[75px] border-[4px] border-t-0 border-slate-500 "></span>
                    <span className="w-full h-full absolute flex flex-col items-center justify-center top-0 left-0 ">
                        <p className="text-sm font-semibold text-slate-500">306.90</p>
                        <p className="text-[10px] text-slate-500">Lorem, ip.</p>
                        <p className="text-[10px] text-slate-500">0</p>
                    </span>
                </span>
            </span>

            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-sm font-semibold text-slate-700">A</p>
                <p className="text-[11px] font-semibold text-slate-700">Change</p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum dolor amet.</p>
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum </p>
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum dolor amet.</p>
            </span>
        </div>
    )
}

export const CompanyOverTwo = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px]  border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] flex flex-col justify-center items-center relative ">
                    <DoughnutChart />
                    <span className="w-[105px] h-[105px] flex items-center justify-center absolute top-0 right-0 ">
                        <p className="text-lg font-semibold text-slate-700">68%</p>
                    </span>
                </span>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-sm font-semibold text-slate-700">B</p>
                <p className="text-[11px] font-semibold text-slate-700">Burse</p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum dolor amet.</p>
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum </p>
                <p className="text-[10px] text-slate-700 text-center ">Lorem ipsum dolor amet.</p>
            </span>
        </div>
    )
}

export const CompanyOverThree = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px]  border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] flex flex-col justify-center items-center relative border-[3px] border-slate-500 p-[1.5px] ">
                    <DoughnutChartThree />
                    <span className="w-[105px] h-[105px] flex flex-col items-center justify-center absolute top-0 right-0 ">
                        <p className="text-lg font-semibold text-slate-700">45%</p>
                        <p className="text-[9px] font-semibold text-slate-700">CO2 Levels</p>
                    </span>
                </span>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-sm font-semibold text-slate-700">Indoor Air Quality (IAQ)</p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center "> Monitors CO2 levels, temperature,</p>
                <p className="text-[10px] text-slate-700 text-center ">humidity, and particulate </p>
                <p className="text-[10px] text-slate-700 text-center ">matter to ensure a healthy environment.</p>
            </span>
        </div>
    )
}

export const CompanyOverFour = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px] border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] flex flex-col justify-center items-center relative  ">
                    <DoughnutChartFour />
                    <span className="w-[105px] h-[105px] flex items-center justify-center absolute top-0 right-0 ">
                        <span className="w-[100px] mx-auto h-[1px] absolute top-[50%] border-b-[2px] border-slate-700 "></span>
                        <span className="flex flex-col items-center justify-center bg-white px-[3px] z-10">
                            <p className="text-md font-semibold text-slate-700">80%</p>
                            <p className="text-[9px] ">Lighting </p>
                            <p className="text-[9px] ">Adequacy </p>
                        </span>
                    </span>
                </span>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center bg-transparent ">
                <p className="text-sm font-semibold text-slate-700">Lighting Levels</p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center "> Ensures adequate and well-distributed</p>
                <p className="text-[10px] text-slate-700 text-center ">lighting for occupant </p>
                <p className="text-[10px] text-slate-700 text-center ">comfort and productivity</p>
            </span>
        </div>
    )
}

export const CompanyOverFive = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px] border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] flex flex-col justify-center items-center relative border-[3px] border-slate-500 p-[1.5px] ">
                    <DoughnutChartFive />
                    <span className="w-[105px] h-[105px] flex items-center justify-center absolute top-0 right-0 ">
                        <p className="text-md font-semibold text-slate-700">58.5</p>
                    </span>
                </span>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-sm font-semibold text-slate-700 text-center">Water Use Intensity</p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center "> Measures water consumption per </p>
                <p className="text-[10px] text-slate-700 text-center ">square foot per year to  </p>
                <p className="text-[10px] text-slate-700 text-center">identify leaks and Conservation Oppotunities</p>
            </span>
        </div>
    )
}
export const CompanyOverSix = ()=>{
    return (
        <div className="w-1/6 h-full flex flex-col items-start justify-between px-[9px] border-r border-slate-400 ">
            <span className="w-full flex-1 flex items-center justify-center relative ">
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center right-0 top-0 bg-slate-200"><FaBoxArchive size={16} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 top-0 bg-slate-200"><TiSocialFlickrCircular size={23} className='text-slate-600' /> </span>
                <span className="absolute w-[27.5px] h-[27.5px] rounded-[3px] flex items-center justify-center left-0 bottom-0 bg-slate-200"><MdOutlineBlurCircular size={22} className='text-slate-600' /> </span>
                
                <span className="w-[105px] h-[105px] rounded-[100%] flex flex-col justify-center items-center relative bg-[#475569] p-[2px] ">
                    <DoughnutChartSix />
                    <span className="w-[105px] h-[105px] flex items-center justify-center absolute top-0 right-0 ">
                        <p className="text-lg font-semibold text-white">70%</p>
                    </span>
                </span>
            </span>
            <span className="w-full h-[50px] flex flex-col items-center justify-center ">
                <p className="text-sm font-semibold text-slate-700">Waste Management</p>
                <p className="text-[11px] font-semibold text-slate-700"></p>
            </span>
            <span className="w-full h-[60px] flex flex-col items-center justify-center ">
                <p className="text-[10px] text-slate-700 text-center ">Tracks waste diversion rates,</p>
                <p className="text-[10px] text-slate-700 text-center ">monitoring progress </p>
                <p className="text-[10px] text-slate-700 text-center ">towards sustainability goals.</p>
            </span>
        </div>
    )
}

export const CompanyOvernow = ()=>{
    return (
        <div className="w-full px-[20px] h-full flex flex-col items-start justify-between px-[9px]  ">
            <span className="w-full flex-1 flex flex-col items-center justify-center relative  gap-2">

                <span className="w-full h-[49.5%] flex flex-row items-center justify-center gap-[40px]">
                    <span className="relative h-[55px] w-[55px] rounded-[60px] border-[3px] border-slate-500 flex items-center justify-center">
                        <span className="absolute left-[50%] -bottom-[26px] w-[1px] h-[26px] border-r border-slate-500 flex items-end">
                            <span className="relative ">
                                <span className="absolute -left-[1.75px] -top-[2px] w-[5px] h-[5px] rounded-[100%] bg-slate-500 "></span>
                            </span>
                        </span>
                        <p className="text-sm font-semibold text-slate-500">CO</p>
                    </span>
                    <span className="h-[60px] w-[60px] rounded-[60px] flex items-center justify-center">
                        <span className="h-[1px] w-full border-b border-slate-500 line-1 relative flex items-center justify-center">
                            <p className="h-[5px] w-[5px] rounded-[100%] bg-slate-500 "></p>
                        </span>
                    </span>
                    <span className="h-[60px] w-[60px] rounded-[60px] flex items-center justify-center relative ">
                        <DoughnutChartEight />
                        <span className="w-[78%] h-[78%] m-auto flex items-center justify-center border-[3px] border-slate-500 absolute rounded-[100%]">
                            <p className=" text-sm font-semibold text-slate-500">20A</p>
                        </span>
                    </span>
                </span>
                
                <span className="w-[92%] mx-auto h-[1%] flex flex-row items-center justify-center border-b border-slate-500"></span>
                
                <span className="w-full h-[49.5%] flex flex-row items-center justify-center gap-[20px]">
                    <span className="relative h-[60px] w-[60px] rounded-[60px] border-[3px] border-slate-500 flex items-center justify-center">
                        <span className="absolute right-[5%] -top-[22px] w-[1px] h-[34px] border-r border-slate-500 flex items-start">
                            <span className="relative ">
                                <span className="absolute -left-[1.75px] -top-[2px] w-[5px] h-[5px] rounded-[100%] bg-slate-500 "></span>
                            </span>
                        </span>
                        <p className="text-sm font-semibold text-slate-500">03</p>
                    </span>

                    <span className="relative h-[60px] w-[60px] rounded-[60px] border-[3px] border-slate-500 flex items-center justify-center">
                        <span className="absolute right-[5%] -top-[22px] w-[1px] h-[34px] border-r border-slate-500 flex items-start">
                            <span className="relative ">
                                <span className="absolute -left-[1.75px] -top-[2px] w-[5px] h-[5px] rounded-[100%] bg-slate-500 "></span>
                            </span>
                        </span>
                        <p className="text-sm font-semibold text-slate-500">0\5</p>
                    </span>

                    <span className="h-[80px] w-[80px] rounded-[80px] flex items-center justify-center relative">
                        <span className="absolute left-[10%] -top-[9.5px] w-[1px] h-[39px] border-r border-slate-500 flex items-start">
                            <span className="relative ">
                                <span className="absolute -left-[1.75px] -top-[2px] w-[5px] h-[5px] rounded-[100%] bg-slate-500 "></span>
                            </span>
                        </span>
                        <DoughnutChartSeven />
                        <span className="w-[83.5%] h-[83.5%] m-auto flex items-center justify-center border-[3px] border-slate-500 absolute rounded-[100%]">
                            <p className=" text-sm font-semibold text-slate-500">20A</p>
                        </span>
                        
                        <span className="absolute right-[45%] -top-[42px] w-[1px] h-[45px] border-r border-slate-500 flex items-start"></span>
                        <span className="absolute right-[15%] -top-[36px] w-[1px] h-[48px] border-r border-slate-500 flex items-start"></span>
                    </span>
                </span>

            </span>

            <span className="w-full h-[60px] flex flex-row items-center justify-center gap-2">
                <span className="w-1/3 h-full flex flex-col items-center justify-start">
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum.</p>
                </span>
                <span className="w-1/3 h-full flex flex-col items-center justify-start">
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum.</p>
                </span>
                <span className="w-1/3 h-full flex flex-col items-center justify-start">
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem ipsum dolor.</p>
                    <p className="text-[10px] text-slate-700 text-center">Lorem, ipsum.</p>
                </span>
            </span>
        </div>
    )
}