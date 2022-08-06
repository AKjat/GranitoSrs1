import * as React from "react";
import {Link, } from 'react-router-dom'
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: "fixed",
    top: theme.spacing(1),
    right: theme.spacing(1),
    background: "rgba(1, 0, 0, 0.28)",
    borderRadius: "15px",
  },
  box1: {
    [theme.breakpoints.down("md")]: {
      height: "500px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    // objectFit: "cover",
    objectFit: "Fill"
  //   .box img {
  //     width: 100%;
  //     height: 100%;
  // }
  
  // .box1 img {
  //     object-fit: cover;
  // }
  
  // .box2 img {
  //     object-fit: contain;
  // }
  
  // .box3 img {
  //     object-fit: fill;
  // }
      
  }
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductDialogue(props) {
  //   const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const open = props.open;
  const setOpen = props.setOpen;

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid container direction="row">
          <Grid item  height={400}  overflow="hidden">
            <img className={classes.img} src="img/p4.jpg"   alt="" />
          </Grid>
          <Grid item >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              {props.name}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Description Color: White stone with shiny brown flakes Surface
              </Typography>
              <Typography gutterBottom color="primary">
                Recommended Usage: Countertops, mosaic, exterior - interior wall
                and floor applications, fountains, pool and wall capping,
                stairs, window sills
              </Typography>
              <Typography>
                Finishing Surface: Polished, Sawn Cut, Sanded, Rockfaced,
                Sandblasted, Tumbled
              </Typography>
            </DialogContent>
            <DialogActions>
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Button component={Link} to="/products/productname">Know More</Button>
                </Grid>
                <Grid item>
                  <Button autoFocus onClick={handleClose} disabled>
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Grid>
        </Grid>
      </BootstrapDialog>
    </div>
  );
}
