import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import profilepic from '../assets/profilepic.png'

const Header = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="flex-end" p={2} backgroundColor='#fff'>
      {/* SEARCH BAR */}
      {/* <Typography
              variant="h3"
              color='#333'
              sx={{}}
            >
              Data
      </Typography>   */}
       <Box
        display="flex"
        backgroundColor='#fafbfc'
        borderRadius="10px"
        justifyContent='flex-end' 
        alignContent='flex-end'
      >
        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
        <Box backgroundColor='#377dff' sx={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{color:'#fff'}}/>
        </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex" ml={3} mr={3} justifyContent='space-around'>
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton> */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <Box
        component="img"
        sx={{
          height: 35,
          width: 35,
        }}
        alt=""
        src={profilepic}
      />      </Box>
    </Box>
  );
};

export default Header;
