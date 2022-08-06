import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, Box, Divider, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Typography } from '@mui/material';

const options = [
    <Box display="flex" alignItems="center">
    <Typography >m</Typography>
    <Typography style={{fontSize: 9,lineHeight:1, textAlignVertical: 'top'}}>2</Typography>
    </Box>,
    <Box display="flex" alignItems="center">
    <Typography style={{fontSize:15, }}>ft</Typography>
    <Typography style={{fontSize: 9,lineHeight:1, textAlignVertical: 'top'}}>2</Typography>
    </Box>
]
export default function SpecialReqDialog({setSuccess}) {
  
  const [open, setOpen] = React.useState(false);
  const [option, setOption]= React.useState(options[0])
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    return(
      <Alert severity="success">This is a success alert — check it out!</Alert>
    )
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Special Request
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Details</DialogTitle>
        <DialogContent>
            <Typography>Customer Details</Typography>
        <Box display="flex"  alignItems="center" marginTop={1}>
                <TextField fullWidth  label="Name" />
            </Box>
            <Box display="flex"  alignItems="center" marginTop={1}>
                <TextField fullWidth  label="Company Name" />
            </Box>
            <Typography marginTop={2}>Product Details</Typography>
            <Box display="flex"  alignItems="center" marginTop={1}>
                <TextField label="Thickness" InputProps={{endAdornment: <InputAdornment position='end'>mm</InputAdornment>,
          }}/>
            </Box>
            <Box display="flex"  alignItems="center" marginTop={1}>
            <TextField  label="Quantity" >   
            </TextField>
                <TextField  select value={option} onChange={handleChange} type="number">
                  {options.map((option)=>(
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}  
                </TextField>  
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button 
        onClick={() => {
          setOpen(!open)
          setSuccess(true);
        }}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}