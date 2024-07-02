'use client'
import { ShowSideBarProps } from '@/types';
import React, {useState, useEffect} from 'react'
import { FaCaretLeft } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { RiWaterFlashFill } from "react-icons/ri";
import { TbRecycle } from "react-icons/tb";
import { MdEmojiPeople } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdTouchApp } from "react-icons/md";
import { MdFeedback } from 'react-icons/md';
import { MdTrackChanges } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdNoteAlt } from "react-icons/md";
import { PiCallBell } from "react-icons/pi";


const SideBar = ({setShowSideBar, showSideBar, selectedPage, setSelectedPage}:ShowSideBarProps) => {
    const [selectedNav, setSelectedNav] = useState('')
    const [activeNavItem, setActiveNavItem] = useState('')
    
    useEffect(() => {
        const side_bar = sessionStorage.getItem('side_nav')
        const side_bar_item = sessionStorage.getItem('side_nav_item')
        if (side_bar == null || !side_bar || !['dashboard', 'building_behaviour', 'building_performance', 'contact', 'generate_report', 'report_summary'].includes(side_bar)){
            setSelectedNav('dashboard')
        }else{
            setSelectedNav(side_bar)
        }
        if (side_bar == 'building_behaviour'){
            setSelectedNav('building_behaviour')
            if (!side_bar_item || side_bar_item == null || !['engagement', 'useability', 'perception', 'behavioral', 'circulation-map', 'occupancy-map', 'touchpoint-map'].includes(side_bar_item)){
                setActiveNavItem('engagement')
            }else{
                setActiveNavItem(side_bar_item)
            }
        }
    }, [])

    function selectNavBar(item: any){
        console.log('selected item ',item)
        if (item == 'building_behaviour'){
            setActiveNavItem('')
        }
        setSelectedPage(item)
        setSelectedNav(item)
        sessionStorage.setItem('side_nav', item)
        if (item == 'dashboard'){
            setShowSideBar(false)
        }
    }
    
    function selectNavBarItem(item:any){
        setSelectedPage(item)
        setActiveNavItem(item)
        sessionStorage.setItem('side_nav_item', item)
        // setShowSideBar(false)

    }


    return (
        <div className="w-full h-full flex flex-col justify-between items-start">
            <span className="w-full h-[60px] flex items-center justify-start px-3 relative">
                <span className="side-bar" onClick={()=> setShowSideBar(false)}><FaCaretLeft size={21}  /> </span>
                <p className="text-xl font-bold flex items-start justify-start"><p className="text-slate-200">AD</p> AA</p>
            </span>
            <div className="w-full flex-1 flex flex-col items-start justify-between gap-2 ">
                <div className="w-full min-h-[50px]  mt-[20px] px-3 pr-4 flex flex-col items-start justify-start gap-2 ">
                    <span className={selectedNav == 'dashboard'? 'active-side-bar-nav': 'side-bar-nav'} onClick={()=> selectNavBar('dashboard')}>
                        <span className="w-full flex items-center justify-start gap-3">
                            <BiSolidDashboard  size={22} />
                            <p className="text-md">Dashboard</p>
                        </span>
                    </span>

                    {/* the side bar nav with drop down */}

                    <span className="w-full flex flex-col items-start gap-2">
                        <span className={selectedNav == 'building_performance' ? "active-side-bar-nav" : "side-bar-nav"} onClick={()=> selectNavBar('building_performance')} >
                            <span className="w-full flex items-center justify-start gap-3">
                                <FaBuilding  size={22} />
                                <p className="text-md">Building Performance</p>
                            </span>
                            <span className="h-full w-[20px] flex items-center justify-center">
                                {selectedNav == 'building_performance' ? <FaCaretUp  size={22} />:  <FaCaretDown  size={22} />}
                            </span>
                        </span>
                        {/* below here will have the rows */}
                        {selectedNav == 'building_performance'  && <span className="w-full flex flex-col items-start justify-start gap-2 pl-[10px] ">
                            <span onClick={()=> selectNavBarItem('energy-efficiency')} className={activeNavItem == 'energy-efficiency' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <MdOutlineEnergySavingsLeaf size={22} />
                                    <p className="text-md">Energy Efficiency</p>
                                </span>
                            </span>

                            <span onClick={()=> selectNavBarItem('comfort-and-health')} className={activeNavItem == 'comfort-and-health' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <RiWaterFlashFill size={22} />
                                    <p className="text-md">Comfort and Health</p>
                                </span>
                            </span>

                            <span onClick={()=> selectNavBarItem('sustainability')} className={activeNavItem == 'sustainability' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <TbRecycle size={22} />
                                    <p className="text-md">Sustainability</p>
                                </span>
                            </span>
                        </span>}
                    </span>


                    {/* the side bar nav with drop down */}
                    
                    <span className="w-full flex flex-col items-start gap-2">
                        <span className={selectedNav == 'building_behaviour' ? "active-side-bar-nav" :"side-bar-nav"} onClick={()=> selectNavBar('building_behaviour')}>
                            <span className="w-full flex items-center justify-start gap-3">
                                <MdEmojiPeople size={22} />
                                <p className="text-md">Building Behaviour</p>
                            </span>
                            <span className="h-full w-[20px] flex items-center justify-center">
                                {selectedNav == 'building_behaviour' ? <FaCaretUp  size={22} />:  <FaCaretDown  size={22} />}
                            </span>
                        </span>
                        {/* below here will have the rows */}
                        {selectedNav == 'building_behaviour' && <span className="w-full flex flex-col items-start justify-start gap-2 pl-[10px] ">
                            <span onClick={()=> selectNavBarItem('engagement')} className={activeNavItem == 'engagement' ? "active-side-bar-nav-item":"side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <FaHandshakeAngle size={22} />
                                    <p className="text-md">Engagement KPIs</p>
                                </span>
                            </span>

                            <span onClick={()=> selectNavBarItem('useability')} className={activeNavItem == 'useability' ? "active-side-bar-nav-item":"side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <MdTouchApp size={22} />
                                    <p className="text-md">Usability KPIs</p>
                                </span>
                            </span>

                            <span onClick={()=> selectNavBarItem('perception')} className={activeNavItem == 'perception' ? "active-side-bar-nav-item": "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <MdFeedback size={19} />
                                    <p className="text-md">Perception KPIs</p>
                                </span>
                            </span>

                            <span onClick={()=> selectNavBarItem('behavioural')} className={activeNavItem == 'behavioural' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <MdTrackChanges size={20} />
                                    <p className="text-md">Behavioral KPIs</p>
                                </span>
                            </span>
                            <span onClick={()=> selectNavBarItem('touchpoint-map')} className={activeNavItem == 'touchpoint-map' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <FaMapMarkedAlt size={20} />
                                    <p className="text-md">Touchpoint Map</p>
                                </span>
                            </span>
                            <span onClick={()=> selectNavBarItem('occupancy-map')} className={activeNavItem == 'occupancy-map' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <FaUsers size={20} />
                                    <p className="text-md">Occupancy Map</p>
                                </span>
                            </span>
                            <span onClick={()=> selectNavBarItem('circulation-map')} className={activeNavItem == 'circulation-map' ? "active-side-bar-nav-item" : "side-bar-nav-item"}>
                                <span className="w-full flex items-center justify-start gap-3">
                                    <FaArrowsAlt size={20} />
                                    <p className="text-md">Circulation Map</p>
                                </span>
                            </span>
                        </span>}
                    </span>

                    <span className={selectedNav == 'report_summary' ? "active-side-bar-nav" : "side-bar-nav"} onClick={()=> selectNavBar('report_summary')} >
                        <span className="w-full flex items-center justify-start gap-3">
                            <MdNoteAlt  size={23} />
                            <p className="text-md">Report Summary</p>
                        </span>
                        
                    </span>

                    <span className={selectedNav == 'generate_report' ? "active-side-bar-nav" : "side-bar-nav"} onClick={()=> selectNavBar('generate_report')} >
                        <span className="w-full flex items-center justify-start gap-3">
                            <BiSolidReport  size={23} />
                            <p className="text-md">Generate Report</p>
                        </span>
                        
                    </span>

                    <span className={selectedNav == 'contact' ? "active-side-bar-nav" : "side-bar-nav"} onClick={()=> selectNavBar('contact')} >
                        <span className="w-full flex items-center justify-start gap-3">
                            <PiCallBell  size={23} />
                            <p className="text-md">Contact ADAA</p>
                        </span>
                        
                    </span>

                </div>
                <div className="w-full min-h-[50px] mb-[20px] px-3 pr-4 ">
                    <span className="side-bar-nav-logout">
                        <span className="w-full flex items-center justify-start gap-3">
                            <RiLogoutBoxRLine  size={23} />
                            <p className="text-md">Logout</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SideBar