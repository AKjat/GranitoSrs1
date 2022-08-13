import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "gray",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5),
    },
    marginTop: theme.spacing(1),
    backgroundImage:`url('/img/SliderHome/backGranite.jpg')`
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "70px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      
      component="footer"
      className={classes.root}
      >
    <Grid
      container
      // component="footer"
      // className={classes.root}
      justifyContent="space-around"
    >
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ marginBottom: 1 }} className={classes.logo}>
          <img
            src="img/logo/logo1.png"
            height="100%"
            style={{ objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Typography variant="body2">
          Establiashed in 1987, are well-known manufacturers, suppliers, and
          exporters of premium quality Granite, Marbles, and All Natural Stones.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontStyle="revert">
            Contact Us <ContactSupportIcon />
          </Typography>
          <Typography variant="body2">Shree Ram Expo Office:</Typography>
          <Typography variant="caption">RIICO Industrial Area,</Typography>
          <Typography variant="caption">Madanganj- Kishangarh</Typography>
          <Typography variant="caption">
            Dist. Ajmer 305801 (Raj.) INDIA
          </Typography>
          <Typography variant="caption">
            <PhoneIcon color="secondary" fontSize="small" />{" "}
            <a href="tel:+91-95715 10000">+91-95715 10000</a>
          </Typography>
          <Typography variant="caption">
            {/* mailto: – open an email app */}
            <EmailIcon color="secondary" fontSize="small" />{" "}
            <a href="mailto:info@shreeramexpo.in">info@shreeramexpo.in</a>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box display='flex' flexDirection='column'>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowRightIcon />
          <Link
            to="/transportestimate"
            sx={{
              textDecoration: "none !important",
              color: "inherit !important",
            }}
          >
            <Typography variant="body1">Transport Estimate</Typography>
          </Link>
        </Box>
        <Box display='flex'>
        <IconButton sx={{color:'blue'}}  >
          <a target='_blank' href='https://www.facebook.com/companyofstone/'>
          <FacebookIcon/>
          </a>
        </IconButton>
        <IconButton sx={{color:'#E4405F'}}>
        <a target='_blank' href='https://instagram.com/shreeramstone_?igshid=YmMyMTA2M2Y='>
          <InstagramIcon/>
        </a>
        </IconButton>
        <IconButton sx={{color:'#1DA1F2'}}>
        <a target='_blank' href='https://twitter.com/AnkitSinghalSRS'>
          <TwitterIcon/>
          </a>
        </IconButton>
        <IconButton sx={{color:'#0077b5'}} >
          <a target='_blank'  href='https://www.linkedin.com/in/ankitsinghal90/'>
          <LinkedInIcon/>
          </a>
        </IconButton>
        <IconButton sx={{color:'#4FCE5D'}}>
        <a target='_blank'>
          <WhatsAppIcon/>
          </a>
        </IconButton>
        <IconButton sx={{color:'red'}} fontSize='large'>
        <a target='_blank' href='https://www.youtube.com/channel/UCXiRBTD8MD11u-iY2hBE4Wg'>
          <YouTubeIcon/>
          </a>
        </IconButton>
        </Box>
        </Box>
      </Grid>
    </Grid>
    <Typography marginTop={2} align='center'> Shree Ram Stones & Company &copy;  2022</Typography>
    </Box>
  );
};

export default Footer;
