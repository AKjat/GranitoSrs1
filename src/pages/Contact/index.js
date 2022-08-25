import {
  Box,
  IconButton,
  Divider,
  Grid,
  ImageList,
  Typography,
} from "@mui/material";
import React from "react";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <Grid container      sx={{ backgroundColor: "#BBBB" }}>
      <img
        className="d-block w-100"
        src="img\SliderHome\contact us marble 2.0.jpg"
        // height={250}
      />
      <Grid item sm={12} lg={4} padding={5}>
        {/* <Typography align="center">
          <h2>
            <u>Contact Us</u>
          </h2>
        </Typography> */}
        <Box >
          <Typography padding={1}>
            <b>
              Any kind of inquiries on product or bulk purchase please feel free
              to contact us 24/7 . We will be delighted to help you all the way
              .
            </b>
          </Typography>
          <Divider sx={{ bgcolor: "black" }}></Divider>
          <Typography padding={1}>
            <LocationOnIcon color="primary" />
            RIICO Industrial Area, Madanganj- Kishangarh Dist. Ajmer 305801
            (Raj.) INDIA
          </Typography>
          <Divider sx={{ bgcolor: "black" }}></Divider>
          <Typography padding={1} variant="caption">
            <PhoneIcon color="primary" />{" "}
            <a href="tel:+91-95715 10000">+91-95715 10000</a>
            {/* <Typography>+91-95715 10000</Typography> */}
          </Typography>
          <Divider sx={{ bgcolor: "black" }}></Divider>
          <Typography padding={1} variant="caption">
            <EmailIcon color="primary" />{" "}
            <a href="mailto:info@shreeramexpo.in">info@shreeramexpo.in</a>
          </Typography>
          <Divider sx={{ bgcolor: "black" }}></Divider>
          <Typography padding={1} variant="caption">
            <b>Keep In Touch</b>
            <IconButton sx={{ color: "blue" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/companyofstone/"
              >
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#E4405F" }}>
              <a
                target="_blank"
                href="https://instagram.com/shreeramstone_?igshid=YmMyMTA2M2Y="
              >
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#1DA1F2" }}>
              <a target="_blank" href="https://twitter.com/AnkitSinghalSRS">
                <TwitterIcon />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#0077b5" }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ankitsinghal90/"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton sx={{ color: "#4FCE5D" }}>
              <a target="_blank" href="https://wa.me/919571510000">
                <WhatsAppIcon />
              </a>
            </IconButton>
            <IconButton sx={{ color: "red" }} fontSize="large">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCXiRBTD8MD11u-iY2hBE4Wg"
              >
                <YouTubeIcon />
              </a>
            </IconButton>
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={12} lg={8} padding={5}>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px,1fr)) !important",
            gridAutoColumns: "minmax(300px, 1fr)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652857.170013755!2d70.63881900000003!3d26.60864610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bf1e5218fc089%3A0x8bb5c279ff645254!2sShree%20Ram%20Granito!5e0!3m2!1sen!2sin!4v1661147131154!5m2!1sen!2sin"
            width="850"
            height="350"
            allowfullscreen=""
            loading="lazy"
            frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </ImageList>
      </Grid>
      <Grid>
        {/* <Typography align="center">
          <h2>Send Enquiry</h2>
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default Contact;
