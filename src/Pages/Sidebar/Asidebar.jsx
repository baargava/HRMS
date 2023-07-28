import React from 'react'
import './Asidebar.scss'
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import proficon from '../assets/proficon.png'
import { Badge } from '@mui/material';
import profilepic from '../assets/profilepic.png'

function Asidebar() {
  return (
    <>
    <div className='aside'>
        <div className='icons'>
     <HelpIcon style={{color:'#c4c4c4',width:'1.8rem',height:'1.8rem',}}/>
   
     <NotificationsIcon style={{color:'#c4c4c4',width:'1.8rem',height:'1.8rem',paddingInline:'0.5em'}}/>
     <img src={proficon} alt='img' className='profpic'/>
        </div>
        <p className='imgdiv'>
        <img src={profilepic} alt='profile' className='profile'/>
        <p className='imgdiv-name'>Baargava Ram</p>
        <p className='imgdiv-role'>Frontend Developer</p>
        </p>
       
    </div>
    </>
  )
}

export default Asidebar