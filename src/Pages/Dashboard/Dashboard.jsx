import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'
import { useState } from "react";
import suitcase from '../assets/suitcase.png'
import activeemp from '../assets/activeemp.png'


const Dashboard = () => {
  // const theme = useTheme();
  // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // const colors = tokens(theme.palette.mode);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Toatl Applications',
        data: [44, 55, 33, 44, 66, 77, 88, 121, 100, 150, 120, 80],
      },
      {
        name: 'Shortlisted Applications',
        data: [33, 45, 20, 35, 45, 57, 66, 110, 90, 130, 90, 45],
      },
      {
        name: 'Rejected Applications',
        data: [11, 10, 13, 9, 21, 20, 22, 11, 10, 20, 30, 35],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 380,
        marginTop: 20,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      colors: ['#56CCF2', '#FFA600', '#FF5630'], // Add your custom colors here
      xaxis: {
        type: 'string',
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    },
  });
  const totalApplications = 2000;
  const shortListedApplications = 1500;
  const rejectedApplications = 500;
  const percentageOfShortListed = Math.floor((shortListedApplications / totalApplications) * 100)
  const percentageOfRejected = Math.floor((rejectedApplications / totalApplications) * 100)
  const mockTransactions = [
    {
      id: 1,
      role: 'Frontend Developer',
      skills: 'ReactJs,ReactNative,JavaScript'
    },
    {
      id: 2,
      role: 'Frontend Developer',
      skills: 'Angular,Iconic,JavaScript'
    },
    {
      id: 3,
      role: 'Backend Developer',
      skills: 'Dotnet,Java'
    },
    {
      id: 4,
      role: 'Azure Developer',
      skills: 'Azure,Devops'
    },
    {
      id: 5,
      role: 'Frontend Developer',
      skills: 'ReactJs,ReactNative'
    },
    {
      id: 6,
      role: 'Frontend Developer',
      skills: 'ReactJs,ReactNative,JavaScript'
    }
  ]
  const activityFeed = [
    {
      id: 1,
      message: 'Pawan kumar applied for  job as Frontend Developer'
    },
    {
      id: 2,
      message: 'Rishi kumar applied for  job as Azure Developer'
    },
    {
      id: 3,
      message: 'Susheel Torkhade applied for  job as Backend Developer'
    },
    {
      id: 1,
      message: 'Pawan kumar applied for  job as Frontend Developer'
    },
    {
      id: 2,
      message: 'Rishi kumar applied for  job as Azure Developer'
    },
    {
      id: 3,
      message: 'Susheel Torkhade applied for  job as Backend Developer'
    }
  ]
  const meetings = [
    {
      id: 1,
      date: 'July 27',
      meeting: 'Meeting with Manager',
      timings: '9AM-10AM'

    },
    {
      id: 2,
      date: 'July 27',
      meeting: 'Meeting with Client',
      timings: '10AM-11AM'

    },
    {
      id: 3,
      date: 'July 27',
      meeting: 'Lunch with hr. Manager',
      timings: '1PM-2PM'

    },
  ]
  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ width: '350px', height: '115px' }}>
          <Box
            width='100%'
            height='100%'
            backgroundColor='#fff'
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            borderRadius={3}
          >
            <Typography component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="500" color="#b2b2b2">
                Total Applications
              </Typography>
              <Typography display="inline" fontWeight="900" color="#333">
                2000
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ width: '350px', height: '115px' }}>
          <Box
            width='100%'
            height='100%'
            backgroundColor='#fff'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
          >
            <Typography component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="500" color="#b2b2b2">
                Shortlisted Applications
              </Typography>
              <Typography display="inline" fontWeight="900" color="#333">
                {shortListedApplications}
              </Typography>
            </Typography>
            <Box sx={{ width: '75px', height: '75px' }}>
              <CircularProgressbar
                value={percentageOfShortListed}
                text={`${percentageOfShortListed}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  // Colors
                  pathColor: `rgba(255, 166, 0)`,
                  textColor: '#333',
                  trailColor: '#EDF1FB',
                  backgroundColor: '#fff',
                  width: '200px',
                  height: '200px'
                })} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ width: '350px', height: '115px' }}>
          <Box
            width="100%"
            height='100%'
            backgroundColor='#fff'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
          >
            <Typography component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="500" color="#b2b2b2">
                Rejected Applications
              </Typography>
              <Typography display="inline" fontWeight="900" color="#333">
                {rejectedApplications}
              </Typography>
            </Typography>
            <Box sx={{ width: '75px', height: '75px' }}>
              <CircularProgressbar
                value={percentageOfRejected}
                text={`${percentageOfRejected}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  // Colors
                  pathColor: `rgba(255, 86, 48)`,
                  textColor: '#333',
                  trailColor: '#EDF1FB',
                  backgroundColor: '#fff',
                })} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3} sx={{ width: '350px', height: '115px' }}>
          <Box
            width="100%"
            height='100%'
            backgroundColor='#fff'
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
          >
            <Typography component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="500" color="#b2b2b2">
                Available Positions
              </Typography>
              <Typography display="inline" fontWeight="900" color="#32CD32">
                {/* {rejectedApplications} */}25
              </Typography>
            </Typography>
            <Box sx={{ width: '75px', height: '75px' }}>
              {/* <CircularProgressbar
                value={percentageOfRejected}
                text={`${percentageOfRejected}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: 'butt',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  // Colors
                  pathColor: `rgba(255, 86, 48)`,
                  textColor: '#333',
                  trailColor: '#EDF1FB',
                  backgroundColor: '#fff',
                })} /> */}
            </Box>
          </Box>
        </Grid>
        {/*----row2----*/}
        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          sx={{ width: '100%', height: '100%' }}
        >

          <Grid xs={12} sm={12} md={12} sx={{ width: '100%', height: '100%' }}>
            <Box backgroundColor='#fff' p="30px" marginBottom={2} borderRadius={3} marginTop={3}>
            <Typography fontWeight='500' variant="h6">Statistics Of Applications</Typography>
              <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />

            </Box>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} xl={6}>
              <Box backgroundColor='#fff' padding="15px" width={400}
             maxHeight="50vh"
            overflow="scroll"
            borderRadius={2}
              >
              <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid #fff`}
              color='#b2b2b2'
              p="15px"
            >
              <Typography
                variant="h6"
                fontWeight='700'
                color='#333'
              >
                Activity Feed
              </Typography>
            </Box>
                {activityFeed.map((transaction, i) => {
                  return (
                    <Box
                      key={`${transaction}-${i}`}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      p="5px"
                    >
                      <Box display='flex' flexDirection='row'>
                      <Box
                    component="img"
                    sx={{
                      height: 30,
                      width: 30,
                    }}
                    alt=""
                    src={activeemp}
                  />
                        <Typography color='#333' marginLeft={2}>
                          {transaction.message} 
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}

              </Box>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Box backgroundColor='#fff' padding="15px" width={330}>
              <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color='#b2b2b2'
              p="5px"
            >
              <Typography
                variant="h6"
                fontWeight="700"
                color='#333'
              >
                Meetings
              </Typography>
            </Box>
                {meetings.map((transaction, i) => {
                  return (
                    <Box
                      key={`${transaction}-${i}`}
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      p="15px"
                    >
                      <Box 
                         width={50}
                          backgroundColor='#fff'
                          borderRadius={3}
                           border='1px solid #faf9fb'
                          >
                        <Typography
                          variant="h5"
                          fontWeight="600"
                          color='#000'  >
                          {transaction.date}
                        </Typography>
                      </Box>
                      <Box marginLeft={2} >
                      <Typography color='#333' variant='p' fontWeight='600'>{transaction.meeting}</Typography>

                       <Typography color='#b2b2b2' > {transaction.timings}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
   </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            backgroundColor='#fff'
            maxHeight="100vh"
            overflow="scroll"
            m="25px 0 0 0"
            borderRadius={2}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid #fff`}
              color='#b2b2b2'
              p="15px"
            >
              <Typography
                variant="h6"
                fontWeight="700"
                color='#333'
              >
                Recently Added Jobs
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => {
              return (
                <Box
                  // key={`${transaction}-${i}`}
                  display="flex"
                  alignItems="flex-start"
                  flexDirection='column'
                  // justifyContent='flex-start'
                  margin={2}
                  backgroundColor='#FAFBFC'
                  borderRadius={2}
                >
                <Box display='flex' flexDirection='row' justifyContent='flex-start' marginLeft={3}>
                  <Box
                    component="img"
                    sx={{
                      height: 30,
                      width: 30,
                    }}
                    alt=""
                    src={suitcase}
                  />
                    <Typography color='#000' marginLeft={2}>
                      {transaction.role}
                    </Typography>
                  </Box>
                  <Box
                    color='#444'
                    p="5px 10px"
                    marginLeft={7.5}
                  >
                    {transaction.skills}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
