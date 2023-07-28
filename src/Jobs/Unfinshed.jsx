import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'


function Unfinished() {
  const jobs=[
    {  id:1,
      jobCategory:'Design',
      jobRole:'Frontend Developer',
      jobLocation:'hyderabad',
      jobDescription:'we need a front end developer'
    },
    {  id:2,
      jobCategory:'Developer',
      jobRole:'Frontend Developer',
      jobLocation:'hyderabad',
      jobDescription:'we need a front end developer'
    },
    {  id:3,
      jobCategory:'Marketing',
      jobRole:'Frontend Developer',
      jobLocation:'hyderabad',
      jobDescription:'we need a front end developer'
    },
    {  id:4,
      jobCategory:'Marketing',
      jobRole:'Frontend Developer',
      jobLocation:'hyderabad',
      jobDescription:'we need a front end developer'
    }
  ]
  return (
    <Box ml={5} mt={3}>
    <Grid container>
    {jobs.map((job, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3} mb={2}>
            <Card
              sx={{ width: 256, height: 270, cursor: 'pointer' }}
            >
              <CardContent>
              <Typography textTransform='uppercase' color='#c4c4c4' variant='span' fontWeight={700}>{job.jobCategory}</Typography>
                <Typography color='#333' variant='h6' fontWeight={500}>{job.jobRole}</Typography>
                <Typography color='#333' variant='subtitle1' fontWeight={400}>{job.jobLocation}</Typography>
                <Typography variant='body1' color='#6F767E' paddingTop={2}>{job.jobDescription}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
    </Box>
  )
}

export default Unfinished