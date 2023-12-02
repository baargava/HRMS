import { Box, Typography } from '@mui/material';
import React from 'react';

const JobDetails = () => {
  return (
    <Box sx={{p: 2, boxShadow: 1, borderRadius: 8 ,backgroundColor:'#fff',my:2}} marginX={2}>
      <Typography variant='h6'>About the job</Typography>
      <Typography variant='body1'>
        Please note that we will be communicating with you using the email address associated with your LinkedIn
        application. It is important that you check this email regularly for updates on your application status.
      </Typography>

      <Typography variant='body1'>
        We are looking for the candidates with 4+ years of relevant experience.
      </Typography>

      <Typography variant='body1'>
        Are you a tech professional looking for remote work in a global setting? If yes, this job is for you.
      </Typography>

      <Typography variant='body1'>
        Welcome to GoArena - a global Sports platform offering remote work opportunities in the technology sector.
        Join us to build a career around your lifestyle working on modern projects for global brands and exciting
        startups.
      </Typography>

      <Typography variant='body1'>
        Currently, we are looking for a remote Middle JavaScript Developer to join our team.
      </Typography>
    </Box>
  );
};

export default JobDetails;
