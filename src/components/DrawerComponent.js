import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';




const DrawerComponent = () => {

  const [drawerState, setDrawerState] = useState(false);
  const navItems = ["JETPIX AUTONOMY", "PRODUCTS", "SOLUTIONS", "RESOURCES", "SUPPORT", "ABOUT"]


  return (
    <React.Fragment>
      <Drawer anchor='top' PaperProps={{backgroundColor: "black", style: { margin: "0 auto",width: '100%', height: "100%", backgroundColor: "rgba(0, 0, 0, 0.577)", color: "white", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" } }} open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <List paperProps={{ display: "flex", flexDirection: "column" }}>
          <ListItemButton>
            <ListItemIcon sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
              {
                navItems.map((item) => (
                  <ListItemText sx={{
                    color: "white", borderRadius: "10px", padding: "20px",
                    ':hover': {
                      backgroundColor: '#065564', // theme.palette.primary.main
                      color: 'white',
                      transition: ".4s"
                    },
                  }} onClick={() => setDrawerState(!drawerState)}>
                    {item}
                  </ListItemText>
                ))
              }

              <ListItemText sx={{
                color: "white", borderRadius: "10px", padding: "20px",
                backgroundColor: "#065564"
              }} onClick={() => setDrawerState(!drawerState)}>
                CONTACT US
              </ListItemText>
              <ListItemText sx={{
                color: "white", padding: "20px",
              }} onClick={() => setDrawerState(!drawerState)}>
                <ExitToAppIcon />
              </ListItemText>



            </ListItemIcon>
          </ListItemButton>
        </List>

      </Drawer>
      <IconButton onClick={() => setDrawerState(!drawerState)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent