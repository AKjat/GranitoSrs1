import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from 'axios';

export default function ProductCategory() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [categories, setCategories] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => { 
    getCategories()
    
  }, []);
  
  const getCategories = () => {
    axios.get(`categories/`)
    .then((response)=>{
      setCategories(response.data)
      setLoading(false)
    })
  }

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClickAll = (id) => {
    const item = document.getElementById(id)
    console.log(item)
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
      
    >
      {!loading && categories.map((d)=>(
          <>
          <ListItemButton onClick={handleClickAll(d.id)} onKeyDown={handleClickAll(d.id)} key={d.id}>
          <ListItemIcon>
          {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText secondary={d.name} />
          </ListItemButton>
          <Collapse in={open1} id={d.id} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
                       <ListItemText secondary="White Marbles" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="Makrana Marbles" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="Brown Marbles" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                         <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText secondary="Pink Marbles" />
            </ListItemButton>
          </List>
          </Collapse>
          </>
      )) }
      {/* <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
        {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText secondary="Indian Marbles" />
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="White Marbles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Makrana Marbles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Brown Marbles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText secondary="Pink Marbles" />
          </ListItemButton>
        </List>
      </Collapse> */}
      
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText secondary="Imported Marbles" />
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
      </Collapse>
    </List>
  );
}
