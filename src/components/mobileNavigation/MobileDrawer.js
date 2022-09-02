import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Badge, ButtonGroup, Collapse, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileMenu from "../header/profileMenu/Menu";
import { filterActions } from "../../pages/products/Reducers/filterSlice";

const useStyles = makeStyles({
});
export default function MobileDrawer({ loggedUser, handleLogout }) {
  const [cat, setCat] = React.useState([]);
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  const [showList, setShowList] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    axios.get(`categories/`).then((response) => setCat(response.data));
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dispatch = useDispatch();

  const handleProductsClick = () => {
    dispatch(filterActions.remAllSearches());
    setState({ ...state, left: false });
  };
  const handleFilterCateg = (id) => {
    dispatch(filterActions.setSearch({ name: "category", value: id }));
    setState({ ...state, left: false });
  };

  const logOut = () => {
    setState({ ...state, left: false });
    handleLogout();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "60vw" }}
      role="presentation" margin={2}
    >
      <Grid container justifyContent="space-between">
        <Grid component={Link} to="/" item lg={1} marginTop={3} marginLeft={3}>
          <img height={50} src="img/logo/logo1.png" alt="logo" />
        </Grid>
        <Grid
          item
          marginTop={3}
          marginRight={3}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <CloseIcon />
        </Grid>
      </Grid>

      

      <Divider />
      <Grid
        container
        marginTop={1}
        // direction="column"
        spacing={8}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item >
          <Button
            variant="contained"
            LinkComponent={Link}
            to="/"
            onClick={toggleDrawer(anchor, false)}
            sx={{ width: "60vw" }}
          >
            Home
          </Button>
        </Grid>
        <Grid item display="flex" flexDirection="column">
        <Button
            onClick={toggleDrawer(anchor, false)}
            component={Link}
            to="/product"
            variant="outlined"
            sx={{ width: "60vw" }}
          >
            Products
          </Button>
          {/* <ButtonGroup
            sx={{ justifyContent: "center" }}
            aria-label="split button"
          >
            <Button
              LinkComponent={Link}
              to="/products"
              // sx={{ borderRadius: "4px 0 0 4px ", width: "calc(80vw - 40px)" }}
              sx={{ width: "50vw" }}
              onClick={() => handleProductsClick()}
            >
              Products
            </Button>
            <Button
              // sx={{ borderRadius: "0 4px 4px 0 " }}
              sx={{ width: "10vw" }}
              size="small"
              onClick={() => setShowList(!showList)}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Collapse in={showList}>
            <Box display="flex" flexDirection="column" gap={1} disablePadding>
              {cat?.map((d) => (
                <Button
                  key={d.id}
                  sx={{ color: "black" }}
                  LinkComponent={Link}
                  to={`/products`}
                  onClick={() => handleFilterCateg(d.id)}
                >
                  {d.name}
                </Button>
              ))}
            </Box>
          </Collapse> */}
        </Grid>

        <Grid item>
          <Button
            onClick={toggleDrawer(anchor, false)}
            component={Link}
            to="/about"
            variant="outlined"
            sx={{ width: "60vw" }}
          >
            About
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ width: "60vw" }}
            component={Link}
            to="/blog"
            onClick={toggleDrawer(anchor, false)}
          >
            Blog
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={toggleDrawer(anchor, false)}
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{ width: "60vw" }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            height={60}
          >
            <Grid item>
              <Button
                startIcon={
                  <Badge color="primary">
                    <MenuIcon fontSize="medium" />
                  </Badge>
                }
                onClick={toggleDrawer("left", true)}
              ></Button>
            </Grid>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
