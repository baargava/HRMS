import React, { useState } from 'react';
import { Tabs, Tab, Card, CardContent, Button, Grid, Modal, Box, TextField, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation,useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import AddIcon from '@mui/icons-material/Add';


function ActiveJobs() {
  const [jobs, setJobs] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [jobRole, setJobRole] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const navigate=useNavigate();
  // Function to add a new job
  const handleAddJob = () => {
    setOpenForm(true);
  };

  const resetFormFields = () => {
    setJobRole('');
    setJobCategory('');
    setJobLocation('');
    setJobDescription('');
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobRole,
      jobCategory,
      jobLocation,
      jobDescription,
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    resetFormFields();
    setOpenForm(false);
    console.log(newJob)
  };

  // Function to handle opening the form modal
  const handleOpenForm = () => {
    setOpenForm(true);
  };

  // Function to handle closing the form modal
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <Box ml={5} mt={3} >
      <Grid container spacing={3}>
        {jobs.map((job, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2} mb={2} mr={8}>
            <Card
              sx={{ width: 250, height: 250, cursor: 'pointer' }}
              onClick={()=>navigate('/jobsinfo')}
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card sx={{ width: 250, height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #8f8f8f', backgroundColor: 'transparent' }} >
            <CardContent>
              <Box variant="contained" color="#38cb89" onClick={handleAddJob} display='flex' flexDirection='column' borderRadius={10}>
                <AddIcon sx={{ color: '#38CB89', display: 'flex', alignSelf: 'center', cursor: 'pointer', fontSize: '34px' }} />
                <Typography fontWeight={900} variant='p' cursor='pointer'>Create New Job</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Form Modal */}
      {createPortal(
        <Modal
          open={openForm}
          onClose={handleCloseForm}
          aria-labelledby="job-form-modal"
          aria-describedby="job-form-modal-description"
        >
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '90%',
              maxWidth: 400,
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <h2 id="job-form-modal">Job Form</h2>
            <form onSubmit={handleFormSubmit}>
              <TextField
                required
                label="Job Role"
                name="jobRole"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="job-category-label">Job Category</InputLabel>
                <Select
                  required
                  labelId="job-category-label"
                  id="job-category"
                  name="jobCategory"
                  value={jobCategory}
                  onChange={(e) => setJobCategory(e.target.value)}
                >
                  <MenuItem value="design">DESIGN</MenuItem>
                  <MenuItem value="Developer">DEVELOPER</MenuItem>
                  <MenuItem value="marketing">MARKETING</MenuItem>
                  <MenuItem value="sales">SALES</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Job Location"
                name="jobLocation"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                required
                label="Job Description"
                name="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </Modal>,
        document.body
      )}
    </Box>
  );
}

export default ActiveJobs;
