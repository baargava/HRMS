import { useState } from 'react'
import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
// import AppLayout from './Pages/AppLayout'
import Dashboard from './Pages/Dashboard/Dashboard'
import  Messages  from './Pages/Messages'
import  Calender from './Pages/Calendar'
import Jobs from './Jobs/Jobs'
import Candidates from './Pages/Candidates'
import Referals from './Pages/Referals'
import CareerSites from './Pages/CareerSites'
import Employees from './Pages/Employees'
import Structure from './Pages/Structure'
import Report from './Pages/Report'
import Settings from './Pages/Settings'
import SSidebar from './Pages/Sidebar/SSidebar'
import Header from './Pages/Navbar/Header'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ActiveJobs from './Jobs/ActiveJobs'
import CompletedJobs from './Jobs/CompletedJobs'
import Unfinshed from './Jobs/Unfinshed'

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
 
  return (
    <div className='app'>
    <SSidebar  collapsed={collapsed}
  toggled={toggled}
  handleToggleSidebar={handleToggleSidebar}
  handleCollapsedChange={handleCollapsedChange}/>
    <main className="content">
    <Header/>
    {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <MenuOutlinedIcon />
        </div> */}
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/message' element={<Messages/>}/>
      <Route path='/calender' element={<Calender/>}/>
      <Route path='/candidates' element={<Candidates/>}/>
      <Route path='/referals' element={<Referals/>}/>
      <Route path='/career' element={<CareerSites/>}/>
      <Route path='/jobs' element={<Jobs/>}>
      <Route exact path='/jobs/actjobs' element={<ActiveJobs/>}/>
      <Route path='/jobs/unfinished' element={<Unfinshed/>}/>
      <Route path='/jobs/completed' element={<CompletedJobs/>}/>
      </Route>
      <Route path='/employee' element={<Employees/>}/>
      <Route path='/Structure' element={<Structure/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/settings' element={<Settings/>}/>
</Routes>
</main>
  
    </div>
  )
}

export default App
