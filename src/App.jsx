
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import SSidebar from './Pages/Sidebar/SSidebar';
import Header from './Pages/Navbar/Header';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ActiveJobs from './Jobs/ActiveJobs';
import CompletedJobs from './Jobs/CompletedJobs';
import Unfinshed from './Jobs/Unfinshed';
import { useEffect } from 'react';
import JobsInfo from './Pages/JobsInfo/JobsInfo';
import InfoCandidates from './Pages/JobsInfo/InfoCandidates';
import JobDetails from './Pages/JobsInfo/JobDetails';
import TimelineNotes from './Pages/JobsInfo/TimelineNotes';
import Hiringteam from './Pages/JobsInfo/Hiringteam';
import JobSettings from './Pages/JobsInfo/JobSettings';
import Attendence from './Pages/Attendence';
import Login from './Pages/Login';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const location = useLocation();

  const isDashboardRoute = location.pathname === '/dashboard';
  const isLoggedIn = location.pathname !== '/';

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  const handleSidebarClose = () => {
    setToggled(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsClose(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='app'>
      {isLoggedIn && (
        <SSidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          onClose={handleSidebarClose}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      <main className="content">
        {isDashboardRoute ? (
          <Header
            handleToggleSidebar={handleToggleSidebar}
            isClose={isClose}
            headerText="Dashboard"
            backgroundColor="transparent"
            note='Hello, Baargav. Welcome to Codefacts'
          />
        ) : isLoggedIn ? (
          <Header handleToggleSidebar={handleToggleSidebar} isClose={isClose} backgroundColor='#fff' />
        ) : null}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/message' element={<Messages />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/attendence' element={<Attendence />} />
          <Route path='/career' element={<CareerSites />} />
          <Route path='/jobs' element={<Jobs />}>
            <Route index element={<ActiveJobs />} />
            <Route path='/jobs/actjobs' element={<ActiveJobs />} />
            <Route path='/jobs/unfinished' element={<Unfinshed />} />
            <Route path='/jobs/completed' element={<CompletedJobs />} />
          </Route>
          <Route path='/jobsinfo' element={<JobsInfo />}>
            <Route index element={<InfoCandidates />} />
            <Route path='/jobsinfo/infocandidates' element={<InfoCandidates />} />
            <Route path='/jobsinfo/jobdetails' element={<JobDetails />} />
            <Route path='/jobsinfo/timeline' element={<TimelineNotes />} />
            <Route path='/jobsinfo/hiringteam' element={<Hiringteam />} />
            <Route path='/jobsinfo/jobsettings' element={<JobSettings />} />
          </Route>
          <Route path='/employee' element={<Employees />} />
          <Route path='/Structure' element={<Structure />} />
          <Route path='/report' element={<Report />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
