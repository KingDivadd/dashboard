
'use client'
import React, {useState, useEffect} from 'react'
import MainDashboard from "../component/testDashboardComponent/mainDashboard"

const Dashboard = () => {
    const [userRole, setUserRole] = useState('admin')
    return (
        <div className="">
            {userRole === 'admin' && <MainDashboard />  }

        </div>
    )
}

export default Dashboard