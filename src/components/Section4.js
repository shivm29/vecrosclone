import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, List, ListItem, Divider, ListItemButton, ListItemText, Tabs, Tab, Button, Menu, MenuItem } from '@mui/material';

const Section4 = () => {
  return (
    <div>


      <div className="containers3 black">

        <div className="childcont2" >

          <Typography variant="h3" className="childcont2font" sx={{ fontWeight: "500", marginBottom: "40px" }} >Autonomous 3D Capture
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "400", fontSize: "20px", marginBottom: "20px" }} >Just click a button to automate your entire
            inspection pipeline</Typography>

          <Button className="bannerbutton" variant="contained" sx={{
            backgroundColor: "black", color: "white", margin: "10px 5px", border: "1px solid white", padding: "15px", boxShadow: "none", margin: "30px 0px",
            ':hover': {
              backgroundColor: 'white', // theme.palette.primary.main
              color: 'black',

            },
          }} >LEARN MORE</Button>

        </div>

        <div className="childcont1"  >
        <img src="img/section3img.png" width="100%"></img>

        </div>



      </div>
    </div>
  )
}

export default Section4