import React from 'react';
import { Box, Card, CardContent, Grid, Typography,useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import appdevelopment from '../Pages/assets/appdevelopment.png'
import kayako from '../Pages/assets/kayako.png'

function Unfinished() {
  const theme = useTheme();
  const navigate=useNavigate()

  const jobs = [
    { id: 1, jobCategory: 'Design', jobRole: 'UX Developer', jobLocation: 'hyderabad', jobDescription: 'we need a Figma developer, who have 10 years experience ,must be recent passout',closeDate:'Aug 10' },
    { id: 2, jobCategory: 'Developer', jobRole: 'Frontend Developer', jobLocation: 'hyderabad', jobDescription: 'we need a front end developer' ,closeDate:'Aug 10'},
    { id: 3, jobCategory: 'Marketing', jobRole: 'Marketing Manager', jobLocation: 'hyderabad', jobDescription: 'we need a Sales Manager',closeDate:'Aug 10' },
    { id: 4, jobCategory: 'Sales', jobRole: 'Sales Manager', jobLocation: 'hyderabad', jobDescription: 'we need a Sales Manager',closeDate:'Aug 10' },
    { id: 5, jobCategory: 'Design', jobRole: 'UX Developer', jobLocation: 'hyderabad', jobDescription: 'we need a Figma developer',closeDate:'Aug 10' },
    { id: 6, jobCategory: 'Developer', jobRole: 'Frontend Developer', jobLocation: 'hyderabad', jobDescription: 'we need a front end developer' ,closeDate:'Aug 10'},
    { id: 7, jobCategory: 'Marketing', jobRole: 'Marketing Manager', jobLocation: 'hyderabad', jobDescription: 'we need a Sales Manager',closeDate:'Aug 10' },
    { id: 8, jobCategory: 'Sales', jobRole: 'Sales Manager', jobLocation: 'hyderabad', jobDescription: 'we need a Sales Manager',closeDate:'Aug 10' }
  ];

  return (
    <Box ml={2} mt={3}>
      <Grid container >
        {jobs.map((job) => (  
          <Grid key={job.id} item xs={12} sm={6} md={4} lg={3} xl={3} mb={3} > 
            <Card sx={{ width: 300, height: 270, cursor: 'pointer',borderRadius:2 }}    onClick={()=>navigate('/jobsinfo')}>
              <CardContent>
              <Box display='flex' flexDirection='row' justifyContent='space-between'>
             <Box sx={{border:'1px solid #fafbfc',borderRadius:5,padding:1}}>
             <Box
              component="img"
              src={appdevelopment}
              alt=""
              sx={{ width:50,height:50,alignSelf:'center'}}
            />
             </Box>
                <Typography>{job.closeDate}</Typography>
              </Box> 
              <Typography textTransform='uppercase' color='#c4c4c4' variant='span' fontWeight={700}>
                  {job.jobCategory}
                </Typography>           
                <Typography color='#333' variant='h6' fontWeight={500}>
                  {job.jobRole}
                </Typography>
                <Typography color='#333' variant='subtitle1' fontWeight={400}>
                  {job.jobLocation}
                </Typography>
                <Typography variant='body1' color='#6F767E' paddingTop={2}>
                  {job.jobDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Unfinished;
