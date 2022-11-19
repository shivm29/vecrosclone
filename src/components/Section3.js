import React from 'react'
import { makeStyles } from '@material-ui/core';
import {Typography,Button} from '@mui/material';
import '../App.css'

const Section3 = () => {

    const useStyles = makeStyles({
        videocustom: {
         padding: '20px',
         marginLeft: '10px'
        },
      });

      const classes = useStyles();

  return (
    <div className="containers3">
        <div className = "childcont1"  >
        <video 
            autoPlay
            loop
            muted
            width="100%"
            borderRadius="10px"
          >
            <source
              src="img/videobanner.mp4"
              type="video/mp4"
            />
          </video>
        
    </div>

    <div className="childcont2" > 
        
        <Typography variant="h2" className="childcont2font" sx={{ fontWeight: "500"}} >Powered by JETPIX™</Typography>
        <Typography variant="h5" sx={{ margin: "20px 0px", fontWeight: "500"}} >Sense the 3D world around you</Typography>
        <Typography variant="h5" sx={{fontWeight: "400", fontSize: "20px", marginBottom: "20px"}} ><span style={{fontWeight:"800"}}>JETPIX™</span> is state of the art Operating System developed in house at <span style={{fontWeight:"800"}}>VECROS</span>.</Typography>
        <Typography variant="h5" sx={{fontWeight: "400", fontSize: "20px"}} ><span style={{fontWeight:"800"}}>JETPIX™ </span>is equipped with vision aided navigation technology that enables a fail safe path planning and interactive experience to pilots and users.</Typography>

        <Button className="bannerbutton" variant="contained" sx={{backgroundColor: "white", color: "black", margin: "10px 5px", border:"1px solid black", padding: "15px", boxShadow: "none", margin: "30px 0px",
            ':hover': {
              backgroundColor: 'black', // theme.palette.primary.main
              color: 'white',
              
            },
            }} >LEARN MORE</Button>

        </div>

    </div>
  )
}

export default Section3