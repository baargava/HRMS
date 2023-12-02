import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import profilepic from '../assets/profilepic.png';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleToggleSidebar, isClose, backgroundColor, headerText, note }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
    handleProfileMenuClose();
  };

  return (
    <Box display="flex" flexDirection='row' justifyContent="space-between" p={2} backgroundColor={backgroundColor}>
      {isClose ? (
        <IconButton onClick={() => handleToggleSidebar(true)}>
          <MenuOutlinedIcon />
        </IconButton>
      ) : null}

      {!isMobile && (
        <Box justifyContent='flex-start'>
          <Typography variant="h6" color="#333" sx={{ flexGrow: 1, fontWeight: '700' }}>
            {headerText}
          </Typography>
          <Typography variant="subtitle1" color="#333" sx={{ flexGrow: 1 }}>
            {note}
          </Typography>
        </Box>
      )}

      <Box display='flex' flexDirection='row'>
       {!isMobile&&(
        <Box
          display="flex"
          backgroundColor='#fafbfc'
          borderRadius="10px"
          height={40}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <Box backgroundColor='#377dff' sx={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
        </Box>
       )}

        <Box display="flex" marginX={3} justifyContent='space-around'>
          <IconButton>
            <HelpOutlinedIcon />
          </IconButton>
          <IconButton>
            <Badge color="primary" overlap="circular"
              badgeContent={4}>
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleProfileMenuOpen}>
            <Box
              component="img"
              mt={1}
              ml={1}
              sx={{
                height: 35,
                width: 35,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              alt=""
              src={profilepic}
            />
          </IconButton>
          <Menu
            anchorEl={profileMenuAnchor}
            open={Boolean(profileMenuAnchor)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>
              <PersonOutlinedIcon sx={{ marginRight: '8px' }} />
              My Profile
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <SettingsOutlinedIcon sx={{ marginRight: '8px' }} />
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: '8px' }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
