import React from 'react'
import { Button } from '@mui/material'
const Section6 = () => {
  return (
    <div className="section6">
        <div className="s6cont">
            <div><h3 style={{color: "white"}} >Order Yours Today</h3></div>
            <Button className="bannerbutton" variant="contained" sx={{
                  backgroundColor: "white", color: "black", margin: "10px 5px", padding: "15px", height: "40%",
                  ':hover': {
                    backgroundColor: 'white', // theme.palette.primary.main
                    color: 'black',
                  },
                }} >LEARN MORE</Button>
        </div>
    </div>
  )
}

export default Section6