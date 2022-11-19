import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TabContext value={value}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="DRIVE" value="1" />
        <Tab label="FLEET OPS " value="2" />
        <Tab label="INSPECT" value="3" />
        <Tab label="WORKFLOWS" value="4" />
      </Tabs>
      <TabPanel value="1">
            <div className="imgconts5"><img width="70%" src="img/section5img1.jpeg"></img></div>
        </TabPanel>
        <TabPanel value="2">
        <div className="imgconts5"><img width="70%" src="img/s5i2.jpg"></img></div>
        </TabPanel>
        <TabPanel value="3">
        <div className="imgconts5"><img width="70%" src="img/s5i3.jpg"></img></div>
        </TabPanel>
        <TabPanel value="4">
        <div className="imgconts5"><img width="70%" src="img/s5i4.jpg"></img></div>
        </TabPanel> 
      </TabContext>
    </Box>
  );
}