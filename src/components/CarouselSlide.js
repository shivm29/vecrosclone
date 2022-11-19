import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, List, ListItem, Divider, ListItemButton, ListItemText, Tabs, Tab, Button, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useMediaQuery, useTheme } from '@mui/material'

const CarouselSlide = () => {


  return (
    <>
      <Carousel class="coverimage" slide={false} style={{ padding: "0", width: "100vw", backgroundColor: "black" }}  >
        <Carousel.Item style={{ margin: "0", padding: "0", height: "100vh", objectFit: "cover", overflow: "hidden" }} >
          <div class="coverimage">
            <img
              class="coverimage"
              // className="d-block w-100"
              src="img/banner1.jpeg"
              alt="First slide"
              height="900vh"
              overflow="hidden"

            />
          </div>
          <Carousel.Caption  style={{ display: "flex", width: "fit-content", alignItems: "center", height: "100%" , margin: "0px 10px"}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}  >
              <Typography variant="h2" style={{ fontWeight: "700", fontSize: "3rem" }}  >ATHERA</Typography>
              <Divider />
              <Typography variant="h5" style={{ fontSize: "1rem" }} >Smarter Drone and Scalable operations</Typography>
              <div style={{ display: "flex" }} ><Button variant="outlined" sx={{
                borderColor: "white", color: "white", margin: "10px 5px", padding: "15px",
                ':hover': {
                  backgroundColor: 'white', // theme.palette.primary.main
                  color: 'black',
                },
              }} >WATCH VIDEOS</Button>
                <Button className="bannerbutton" variant="contained" sx={{
                  backgroundColor: "white", color: "black", margin: "10px 5px", padding: "15px",
                  ':hover': {
                    backgroundColor: 'black', // theme.palette.primary.main
                    color: 'white',
                    border: "1px solid white"
                  },
                }} >LEARN MORE</Button></div>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item style={{ margin: "0", padding: "0", height: "100vh", objectFit: "cover", overflow: "hidden" }} >
          <img
            className="d-block w-100"
            src="img/banner2.png"
            alt="First slide"
            height="900vh"
            class="coverimage"
          />
          <Carousel.Caption style={{ display: "flex", width: "fit-content", alignItems: "center", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant="h2" style={{ fontWeight: "700", fontSize: "3rem", textAlign: "left" }}  >VECROS <br></br>CLOUD</Typography>
              <Divider />
              <Typography variant="h5" style={{ fontSize: "1rem" }} >Scalable operations at Finger tips</Typography>
              <div style={{ display: "flex" }} ><Button variant="outlined" sx={{
                borderColor: "white", color: "white", margin: "10px 5px", padding: "15px",
                ':hover': {
                  backgroundColor: 'white', // theme.palette.primary.main
                  color: 'black',
                },
              }} >WATCH VIDEOS</Button>
                <Button className="bannerbutton" variant="contained" sx={{
                  backgroundColor: "white", color: "black", margin: "10px 5px", padding: "15px",
                  ':hover': {
                    backgroundColor: 'black', // theme.palette.primary.main
                    color: 'white',
                    border: "1px solid white"
                  },
                }} >LEARN MORE</Button></div>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default CarouselSlide