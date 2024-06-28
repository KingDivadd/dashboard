'use client'
import { ShowSideBarProps } from '@/types';
import React, {useState, useEffect} from 'react'
import { FaCaretLeft } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const SideBar = ({setShowSideBar, showSideBar}:ShowSideBarProps) => {
    const [selectedNav, setSelectedNav] = useState('')

    function selectNavBar(item: any){
        console.log('selected item ',item)
        setSelectedNav(item)
        sessionStorage.setItem('side_nav', item)
    }


    return (
        <div className="w-full h-full flex flex-col justify-between items-start">
            <span className="w-full h-[60px] flex items-center justify-start px-3 relative">
                <span className="side-bar" onClick={()=> setShowSideBar(false)}><FaCaretLeft size={21}  /> </span>
                <p className="text-xl font-bold flex items-start justify-start"><p className="text-indigo-500">AD</p> AAA</p>
            </span>
            <div className="w-full flex-1 flex flex-col items-start justify-between gap-2 ">
                <div className="w-full min-h-[50px]  mt-[20px] px-3 pr-4 flex flex-col items-start justify-start gap-2 ">
                    <span className={selectedNav == 'dashboard'? 'active-side-bar-nav': 'side-bar-nav'} onClick={()=> selectNavBar('dashboard')}>
                        <span className="w-full flex items-center justify-start gap-3">
                            <BiSolidDashboard  size={22} />
                            <p className="text-md">Dashboards</p>
                        </span>
                    </span>

                    {/* the side bar nav with drop down */}
                    <span className="w-full flex flex-col items-start gap-2">
                        <span className={selectedNav == 'building_behaviour' ? "active-side-bar-nav" :"side-bar-nav"} onClick={()=> selectNavBar('building_behaviour')}>
                            <span className="w-full flex items-center justify-start gap-3">
                                <BiSolidDashboard size={22} />
                                <p className="text-md">Building Behaviour</p>
                            </span>
                            <span className="h-full w-[20px] flex items-center justify-center">
                                <FaCaretDown  size={22} />
                            </span>
                        </span>
                        {/* below here will have the rows */}
                        <span className="w-full flex flex-col items-start justify-start gap-2 pl-[10px] ">
                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng One</p>
                                </span>
                            </span>

                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng Two</p>
                                </span>
                            </span>

                            <span className="side-bar-nav-item">
                                <span className="w-full flex items-center justify-start gap-3">
                                    <BiSolidDashboard size={22} />
                                    <p className="text-md">Sub Builidng Three</p>
                                </span>
                            </span>
                        </span>
                    </span>

                    {/* the side bar nav with drop down */}
                    <span className="w-full flex flex-col items-start">
                        <span className={selectedNav == 'building_performance' ? "active-side-bar-nav" : "side-bar-nav"} onClick={()=> selectNavBar('building_performance')} >
                            <span className="w-full flex items-center justify-start gap-3">
                                <BiSolidDashboard  size={22} />
                                <p className="text-md">Building Performance</p>
                            </span>
                            <span className="h-full w-[20px] flex items-center justify-center">
                                <FaCaretDown  size={22} />
                            </span>
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