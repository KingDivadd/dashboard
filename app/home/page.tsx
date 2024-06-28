
'use client'
import React, {useState, useEffect} from 'react'

const Dashboard = () => {
    const [userRole, setUserRole] = useState('admin')
    return (
        <div className="">
            {/* {userRole === 'admin' && <AdminDashboard />  } */}
            {/* {userRole === 'admin' && <SalesDashboard />  } */}
            {/* {userRole === 'admin' && <OpsDashboard />  } */}
            {/* {userRole === 'admin' && <CustomerDashboard />  } */}
            {/* {userRole === 'admin' && <InstallerDashboard />  } */}

        </div>
    )
}

export default Dashboard