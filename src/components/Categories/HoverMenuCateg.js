import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Collapse,
  createTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CList from "../../data/CategList";
import { green, orange } from "@mui/material/colors";

const theme2 = createTheme({
  palette: {
    tertiary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
  },
}));
const HoverMenuCateg = (props) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const classes = useStyles();

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };
  //   props.d.subheading.map((heading)=>{console.log(heading)})
  //   console.log(props.d.subheading)
  const filter = (e) => {
    console.log(e.target.outerText)
  }
  return (
    <ThemeProvider theme={theme2}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        disablePadding
      >
        <ListItemButton
          ref={popoverAnchor}
          aria-owns="mouse-over-popover"
          aria-haspopup="true"
          
          // onClick={openedPopover ? popoverLeave : popoverEnter}
          onMouseEnter={popoverEnter}
          onClick={popoverEnter}
          onMouseLeave={popoverLeave}
          //   endIcon={openedPopover ? <ExpandLess /> : <ExpandMore />}
        >
          <ListItemText secondary={props.d.heading} />

          <ListItemIcon sx={{ minWidth: "12px" }}>
            {openedPopover ? <ArrowRightIcon /> : <ArrowDropUpIcon />}
          </ListItemIcon>
        </ListItemButton>

        <Popover
          className={classes.popover}
          classes={{
            paper: classes.popoverContent,
          }}
          open={openedPopover}
          anchorEl={popoverAnchor.current}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            onMouseEnter: popoverEnter,
            onMouseLeave: popoverLeave,
          }}
        >
          <List component="div" disablePadding>
            {props.d.subheading.map((c, index) => (
              <ListItemButton key={index} sx={{}}  >
                {/* onClick={()=>props.filterItem('marble')} */}
                <ListItemIcon sx={{ minWidth: "12px" }} >
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText secondary={c} onClick={(e)=>filter(e)} />
              </ListItemButton>
            ))}
          </List>
        </Popover>
        
      </List>
    </ThemeProvider>
  );
};

export default HoverMenuCateg;

{
  /* <ListItemButton onClick="">
        <ListItemIcon>
        {/* {open ? <ExpandLess /> : <ExpandMore />} */
}
/*</ListItemIcon>
        <ListItemText secondary="Imported Marbles" />
        
      </ListItemButton>
      
      <Collapse  timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Creamy Range" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Darkling Range" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Italian Marbles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Milky Range" />
          </ListItemButton>
        </List>
      </Collapse> */
