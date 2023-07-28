import React, { useEffect } from 'react';
import { Tabs, Tab, AppBar, Typography } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';

function Jobs() {
  const routes = [
    { path: 'actjobs', label: 'Active Jobs' },
    { path: 'completed', label: 'Completed' },
    { path: 'unfinished', label: 'Unfinished' },
  ];
const location=useLocation();
 useEffect(() => {
    const activeJobsPath = '/jobs/actjobs';
    const currentPath = location.pathname;
    const isValidRoute = routes.some((route) => route.path === currentPath.split('/').pop());
    if (!isValidRoute) {
      // Change the URL to the active jobs path to update the selected tab
      window.history.replaceState(null, '', activeJobsPath);
    }
  }, [location.pathname]);


  return (
    <>
    <Typography marginLeft={3.5} color='#333' variant='h6' fontWeight={700}>Jobs</Typography>
        <Tabs
          value={location.pathname}
          indicatorColor="#38cb89"
          textColor="#1a1d1f"
          variant="standard"
          sx={{ borderBottom: '1px solid #e0e0e0',marginLeft:'12px' }} // Add a line below the tabs
        >
          {routes.map((route) => (
            <Tab
              key={route.path}
              label={route.label}
              value={`/jobs/${route.path}`}
              component={RouterLink}
              to={`/jobs/${route.path}`}
              sx={{
                '&.Mui-selected': {
                  borderColor: '#38CB89', // Set border color for selected tab
                  borderBottom: '2px solid #38CB89 ', // Remove the bottom border for selected tab
                },
              }}
            />
          ))}
        </Tabs>
      <Outlet /> {/* Render nested routes below the tabs */}
    </>
  );
}

export default Jobs;
