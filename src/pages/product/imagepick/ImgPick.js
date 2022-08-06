import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { SideBySideMagnifier } from "react-image-magnifiers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ImgPick() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "auto",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="fullwidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          sx={{ padding: "2px 2px" }}
          label={<img width={100} src="/img/product/p1.jpg" alt="" />}
          {...a11yProps(0)}
        />
        <Tab
          sx={{ padding: "2px 2px" }}
          label={<img width={100} src="/img/product/p2.jpg" alt="" />}
          {...a11yProps(1)}
        />
        <Tab
          sx={{ padding: "2px 2px" }}
          label={<img width={100} src="/img/product/p3.jpg" alt="" />}
          {...a11yProps(2)}
        />
        <Tab
          sx={{ padding: "2px 2px" }}
          label={<img width={100} src="/img/product/p4.jpg" alt="" />}
          {...a11yProps(3)}
        />
        <Tab
          sx={{ padding: "2px 2px" }}
          label={<img width={100} src="/img/product/p1.jpg" alt="" />}
          {...a11yProps(4)}
        />
      </Tabs>
      {/* <SideBySideMagnifier
        imageSrc="/img/product/p1.jpg"
        imageAlt="Example"
        largeImageSrc="/img/product/p11.jpg" // Optional
      /> */}
      <Box component={TabPanel} value={value} index={0} >
      <img style={{ width:'35vw'}} src="/img/product/p1.jpg" alt="" />
      </Box>
      <Box component={TabPanel} value={value} index={1}>
      <img style={{ width:'35vw'}} src="/img/product/p2.jpg" alt="" />
      </Box>
      <Box component={TabPanel} value={value} index={2}>
      <img style={{ width:'35vw'}} src="/img/product/p3.jpg" alt="" />
      </Box>
      <Box component={TabPanel} value={value} index={3}>
      <img style={{ width:'35vw'}} src="/img/product/p4.jpg" alt="" />
      </Box>
      <Box component={TabPanel} value={value} index={4}>
      <img style={{ width:'35vw'}} src="/img/product/p1.jpg" alt="" />
      </Box>

      {/* <Box sx={{border: '2px solid red',xs:{width: '100px'}, lg:{width: '800px'}, overflow: 'hidden'}}> 
      <TabPanel value={value} index={0}>
          <img  src="/img/product/p1.jpg" alt="" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img  src="/img/product/p2.jpg" alt="" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img  src="/img/product/p3.jpg" alt="" />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <img  src="/img/product/p4.jpg" alt="" />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <img  src="/img/product/p1.jpg" alt="" />
      </TabPanel>
      </Box> */}
    </Box>
  );
}
