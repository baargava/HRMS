import { useState,useEffect, useRef } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses,menuClasses} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { green, red } from "@mui/material/colors";
import profilepic from '../assets/profilepic.png'
const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        backgroundColor: selected === title ? '#377dff' : '#fff',
        color: selected === title ? '#fff' : '#b2b2b2',
      }}
    >
      <MenuItem
        active={selected === title}
        onClick={() => {
          setSelected(title);
          console.log(title);
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SSidebar = ({toggled, handleToggleSidebar,
  handleCollapsedChange}) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState(
    window.innerWidth <= 768
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // useEffect to update isMobileBreakpoint on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileBreakpoint(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        backgroundColor: '#fff',
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "#fff !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",

      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
        backgroundColor: "#377dff",

      },
    }}
  >
  {isMobileBreakpoint &&(
            <div
              onClick={()=>handleToggleSidebar(true) }><MenuOutlinedIcon /></div>
          )}
      <Sidebar       
       collapsed={isCollapsed}  
        customBreakPoint="768px"
        toggled={toggled}
        onToggle={handleToggleSidebar}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: '#fff',
    },
  }}>
      
        <Menu iconShape="square"   menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: active ? '#fff' : '#b2b2b2',
            backgroundColor: active ? '#377dff' : undefined,
            // width:'200px',
            borderRadius:'10px'
          };
      },
    }}>
          {/* LOGO AND MENU ICON */}   
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: green,
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" color='#377dff'>
                  CODEFACTS             
                     </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={profilepic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color='#377dff'
                  fontWeight="500"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Baargava Ram
                </Typography>
                <Typography variant="p" color='#333'>
                  Human Resource Consultant
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Typography
              variant="p"
              color='#333'
              fontWeight='600'
              fontSize={isCollapsed ? '10px':'16px'}

              sx={{ m: "20px 0 20px 5px" ,backgroundColor:'#fff'}}
            >
              MENU
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Messages"
              color='#b2b2b2'
              to="/message"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              active={true}
            />
            <Item
              title="Calendar"
              to="/calender"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Referrals"
              to="/referals"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="p"
              color='#333'
              fontWeight='600'
              fontSize={isCollapsed ? '10px':'16px'}
              sx={{ m: "20px 0 20px 5px" ,backgroundColor:'#fff'}}
            >
              RECRUITMENT
            </Typography>
            <Item
              title="Career Sites"
              to="/career"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Jobs"
              to="/jobs"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Employees"
              to="/employee"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="p"
              color='#333'
              fontSize={isCollapsed ? '10px':'16px'}
              fontWeight='600'
           sx={{ m: "20px 0 20px 5px" ,backgroundColor:'#fff'}}

            >
              ORGANIZATION
            </Typography>
            <Item
              title="Structure"
              to="/Structure"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Report"
              to="/report"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SSidebar;