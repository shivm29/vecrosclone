import React from 'react'
import {  AppBar,Toolbar, Tabs, Tab, Menu, MenuItem,useTheme, useMediaQuery,  } from '@mui/material';
import DrawerComponent from './DrawerComponent';
import {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core';

const NavBar = () => {


  const [navBarbg, setNavbarbg] = useState();
  const navItems = ["JETPIX AUTONOMY", "PRODUCTS", "SOLUTIONS", "RESOURCES", "SUPPORT", "ABOUT"]
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  console.log(isMatch)
  return (
     <AppBar sx={{backgroundColor: "#050505",padding: "6px 40px", height: "fit-content" }}   >
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <img src="img/vecros-logo.png" height="40px" ></img>
        {
          isMatch ? (
            <DrawerComponent />
          ) : (
            <>
            <Tabs textColor="white" sx={{marginLeft:"auto"}}>
          {
            navItems.map((Item) => (
              <Tab className="th"  key={Item} sx={{fontSize:"17px", fontFamily: "Gill Sans", borderRadius: "10px"}} label={Item} />
            ))
          }
          
          
          <Tab variant="contained"  className = "th activeth" sx={{fontSize:"17px", fontFamily: "Gill Sans", borderRadius: "10px",   backgroundColor: "#065564", marginLeft:"5px", opacity: "1"}} label = "CONTACT US"  />
          
          </Tabs>
            </>
          
          )
        }
        
      </Toolbar>
     </AppBar>
  )
}

export default NavBar