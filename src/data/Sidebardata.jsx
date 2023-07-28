import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
export const Sidebardata =[
    {
        title:'Dashboard',
        icon:<DashboardIcon/>,
        link:'/dashboard'
 },
 {
    title:'Messages',
    icon:<CommentRoundedIcon/>,
    link:'/message'
},
{
    title:'Calender',
    icon:<CalendarMonthRoundedIcon/>,
    link:'/calender'
}
]
export const Sidebardata2 =[
    {
        title:'Jobs',
        icon:<WorkRoundedIcon/>,
        link:'/jobs'
 },
 {
    title:'Candidates',
    icon:<PeopleAltRoundedIcon/>,
    link:'/candidates'
},
{
    title:'My Referrals',
    icon:<CachedRoundedIcon/>,
    link:'/referals'
}
,
{
    title:'Career Site',
    icon:<LaptopMacRoundedIcon/>,
    link:'/career'
}
]
export const Sidebardata3 =[
    {
        title:'Employee',
        icon:<PeopleAltRoundedIcon/>,
        link:'/employee'
 },
 {
    title:'Structure',
    icon:<AccountTreeRoundedIcon/>,
    link:'/structure'
},
{
    title:'Report',
    icon:<AssessmentRoundedIcon/>,
    link:'/report'
}
,
{
    title:'Settings',
    icon:<SettingsApplicationsIcon/>,
    link:'/settings'
}
]
