import React from 'react'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FeedIcon from '@mui/icons-material/Feed';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';


function OverviewDashboard() {
  return (
    <div>
        <div className='w-60 bg-black h-screen '>
        <div className='text-white grid grid-cols-2 mt-40 ml-10 mr-10 space-y-10 '>
          <FeedIcon  className='text-white'/> <h4>Overview</h4>
          <PersonOutlineIcon className='text-white'/><h4>User</h4>
          <AccountCircleIcon className='text-white'/><h4>Account</h4>
         <SettingsIcon className='text-white'/> <h4>Settings</h4>
       </div>
        </div>
    </div>
  )
}

export default OverviewDashboard
