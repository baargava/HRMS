import React, { useEffect } from 'react';
import { Tabs, Tab, AppBar, Typography, Box, IconButton } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation ,useNavigate} from 'react-router-dom';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

function Jobs() {
  const routes = [
    { path: 'infocandidates', label: 'Candidates' },
    { path: 'jobdetails', label: 'Job Details' },
    { path: 'timeline', label: 'Timeline&Notes' },
    { path: 'hiringteam', label: 'Hiring Team' },
    { path: 'jobsettings', label: 'Settings' },

  ];
  const navigate=useNavigate();
const location=useLocation();
 useEffect(() => {
    const activeJobsPath = '/jobsinfo/infocandidates';
    const currentPath = location.pathname;
    const isValidRoute = routes.some((route) => route.path === currentPath.split('/').pop());
    if (!isValidRoute) {
      window.history.replaceState(null, '', activeJobsPath);
    }
  }, [location.pathname]);


  return (
    <Box sx={{mt:2}}>
   <Box display='flex' flexDirection='row' ml={5}>
   <IconButton onClick={()=>navigate(-1)} sx={{width:'46px',height:'46px',backgroundColor:'#fff',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <ArrowBackIosNewSharpIcon sx={{fontSize:'16px'}}/>
   </IconButton>
   
   <Box ml={5}>
    <Typography  color='#8f8f8f' variant='body1' fontWeight={500}>Developer</Typography>
    <Typography color='#1a1d1f' variant='h6' fontWeight={500}>Frontend Developer</Typography>
    <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Typography color='#8f8f8f' fontSize='16px' fontWeight={400}>goarena.in</Typography>
        <Typography color='#8f8f8f'>•Full Time</Typography>

    </Box>
    </Box>
   </Box>
        <Tabs
          value={location.pathname}
          indicatorColor="#38cb89"
          textColor="#1a1d1f"
          variant="scrollable"
          sx={{ borderBottom: '1px solid #e0e0e0',marginLeft:'12px' }}
        >
          {routes.map((route) => (
            <Tab
              key={route.path}
              label={route.label}
              value={`/jobsinfo/${route.path}`}
              component={RouterLink}
              to={`/jobsinfo/${route.path}`}
              sx={{
                '&.Mui-selected': {
                  borderColor: '#38CB89', 
                  borderBottom: '2px solid #38CB89 ',
                },
                '&.MuiTab-root': {
                color: '##b2b2b2', 
              },
              }}
              
            />
          ))}
        </Tabs>
      <Outlet /> {/* Render nested routes below the tabs */}
    </Box>
  );
}

export default Jobs;
