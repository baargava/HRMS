import React, { useState } from 'react';
import { Grid, Button, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography,Modal, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Attendence = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);    
  const [reason, setReason] = useState('');



  console.log(selectedRow, 'selected row');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const getButtonStyles = (buttonName) => {
    return {
      bgcolor:  '#FFFFFF',
      color:  '#333',
      '&:hover': {
        bgcolor: '#377dff',
        color: '#FFFFFF',
      },
    };
  };
  const Leaves = [
    { id: 1, leaveType: 'Personal Leaves', credits: 1, debits: 0, balance: 1, unit: 'Days' },
    { id: 2, leaveType: 'Sick Leave', credits: 10, debits: 5, balance: 5, unit: 'Days' },
    { id: 3, leaveType: 'Vacation Leaves', credits: 10, debits: 5, balance: 5, unit: 'Days' },
  ];
  const LeavesHistory = [
    { id: 1, leaveType: 'Personal Leaves', From: '1-08-2023', to: '2-8-2023',LeaveDays:2, Status: 'Approved' },
    { id: 2, leaveType: 'Sick Leaves', From: '1-08-2023', to: '1-8-2023',LeaveDays:1, Status: 'Approved' },
    { id: 3, leaveType: 'Vacation Leaves', From: '1-08-2023', to: '1-8-2023',LeaveDays:1, Status: 'Rejected' },
  ];
  const HolidaysData = [
    { id: 1, date: '2023-01-01', day: 'Monday', optional: 'No', description: 'New Year' },
    { id: 2, date: '2023-01-14', day: 'Tuesday', optional: 'No', description: 'Pongal' },
    { id: 3, date: '2023-08-15', day: 'Tuesday', optional: 'No', description: 'Independence Day' },
    {id:4,date: '2023-12-25', day: 'Friday', optional:'No', description: 'Christmas'},
    {id:5,date: '2023-09-14', day: 'Sunday', optional:'No', description:'Ganesh Jaynathi'},
  ];
const needApprovals=[
  {id:1,leaveType:'Sick Leave',empId:1,empName:'baargav'}
]
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true)
  };

  // Step 3: Create year picker component and handle year selection
  const handleYearChange = (year) => {
    setSelectedYear(year.getFullYear());
  };
  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const handleSubmit = () => {
    setLeaveType('')
    setFromDate('')
    setToDate('')
    setReason('') 
    closeForm(); 
  };
  const modalBody = (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      {/* <Typography variant="h6">Selected Row Details:</Typography> */}
      <Typography>Leave Type: {selectedRow?.leaveType}</Typography>
      <Typography>Credits: {selectedRow?.credits}</Typography>
      <Typography>Debits: {selectedRow?.debits}</Typography>
      <Typography>Balance: {selectedRow?.balance}</Typography>
      <Typography>Unit: {selectedRow?.unit}</Typography>
    Used: <Box display='flex' flexDirection='row'> <Typography>From:29-07-2023</Typography>-<Typography>To:31-07-2023</Typography></Box>
    </Box>
  );
  const leaveApplicationForm = (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#fff', boxShadow: 24, p: 4 }}>
    <Typography variant="h6">Leave Application</Typography>
    <FormControl fullWidth variant="outlined" required>
        <InputLabel htmlFor="leave-type">Leave Type</InputLabel>
        <Select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          label="Leave Type"
          inputProps={{
            name: 'leaveType',
            id: 'leave-type',
          }}
        >
          <MenuItem value="Sick Leave">Sick Leave</MenuItem>
          <MenuItem value="Personal Leave">Personal Leave</MenuItem>
          <MenuItem value="Vacation Leave">Vacation Leave</MenuItem>
        </Select>
      </FormControl>
    <Box display='flex' flexDirection='row' justifyContent='space-between'>
    <Box mx={0} my={2}>
    <DatePicker
      selected={fromDate} 
      onChange={(date) => setFromDate(date)} 
      dateFormat="dd-MM-yyyy"
      placeholderText="From Date"
      className="custom-datepicker"
      required
      style={{padding:5}}
    />
    </Box>
    <Box mx={0} my={2}>
    <DatePicker
      selected={toDate} 
      onChange={(date) => setToDate(date)} 
      dateFormat="dd-MM-yyyy"
      placeholderText="To Date"
      className="custom-datepicker"
      required
    />
    </Box>
    </Box>
    <TextField
      label="Reason"
      fullWidth
      variant="outlined"
      multiline
      
      required
      value={reason} 
      onChange={(e) => setReason(e.target.value)} 
    />
    <Button variant="contained" color="primary" onClick={closeForm}>
      Cancel
    </Button>
    <Button variant="contained" color="primary" onClick={handleSubmit}>
      Submit
    </Button>
  </Box>
  );

  return (
    <Box my={2} mx={2} >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            fullWidth
            sx={getButtonStyles('apply')}
            onClick={() => {
              setIsFormOpen(true)
              handleButtonClick('apply')
              }}
          >
            Apply Leave
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            fullWidth
            sx={getButtonStyles('approve')}
            onClick={() => handleButtonClick('approve')}
          >
            Approve Leave
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            fullWidth
            sx={getButtonStyles('cancel')}
            onClick={() => handleButtonClick('cancel')}
          >
            Cancel Leaves
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            fullWidth
            sx={getButtonStyles('manage')}
            onClick={() => handleButtonClick('manage')}
          >
            Manage Leaves
          </Button>
        </Grid>
      </Grid>   
      {/* {isFormOpen&&leaveApplicationForm}   */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} maxHeight='60vh' overflow='auto'>
          <Typography variant="h6">Leave Accural Balance</Typography> 
          <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Leave Type</TableCell>
                  <TableCell align="right">Credits</TableCell>
                  <TableCell align="right">Debits</TableCell>
                  <TableCell align="right">Balance</TableCell>
                  <TableCell align="right">Unit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Leaves.map((row) => (
                  <TableRow key={row.id} onClick={() => handleRowClick(row)}>
                    <TableCell>{row.leaveType}</TableCell>
                    <TableCell align="right">{row.credits}</TableCell>
                    <TableCell align="right">{row.debits}</TableCell>
                    <TableCell align="right">{row.balance}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} sm={6} maxHeight='60vh' overflow='auto'> 
          <Box display="flex" justifyContent='space-between'>
            <Typography variant="h6">Holidays {selectedYear}</Typography>
            <DatePicker
              selected={new Date(selectedYear, 0, 1)}
              onChange={handleYearChange} 
              dateFormat="yyyy"
              showYearPicker
              className="custom-datepicker"
            />
          </Box>
          <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Day</TableCell>
                  <TableCell align="right">Optional</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {HolidaysData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell align="right">{row.day}</TableCell>
                    <TableCell align="right">{row.optional}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Leave Request Status</Typography> 
          <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Leave Type</TableCell>
                  <TableCell align="right">From Date</TableCell>
                  <TableCell align="right">To Date</TableCell>
                  <TableCell align="right">Leave Days</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {LeavesHistory.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.leaveType}</TableCell>
                    <TableCell align="right">{row.From}</TableCell>
                    <TableCell align="right">{row.to}</TableCell>
                    <TableCell align="right">{row.LeaveDays}</TableCell>
                    <TableCell align="right">{row.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent='space-between'>
            <Typography variant="h6">Leave Requests</Typography>
           
          </Box>
          <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Leave Type</TableCell>
                  <TableCell align="right">Employee Id</TableCell>
                  <TableCell align="right">Employee Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {needApprovals.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.leaveType}</TableCell>
                    <TableCell align="right">{row.empId}</TableCell>
                    <TableCell align="right">{row.empName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant='h6'> </Typography>
        </Grid>
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {modalBody}
      </Modal>
      <Modal
        open={isFormOpen}
        onClose={()=>setIsFormOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {leaveApplicationForm}
      </Modal>
    </Box>
  );
};

export default Attendence;
