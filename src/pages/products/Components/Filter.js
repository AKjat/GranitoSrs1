import {
  Box,
  Divider,
  Typography,
  Chip,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  TextField,
} from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RangeSlider from "./FilterComponents/PriceSlider";
import PublicIcon from "@mui/icons-material/Public";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import Categories from "./Categories";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {Country} from "country-state-city"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { productSearchActions } from "../Reducers/productAkshitReducer";


const useStyles = makeStyles((theme) => ({
  hideM: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  hideD: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  checkForm: {
    "& .MuiFormControlLabel-root": {
      fontSize: "14px",
      "& .MuiTypography-root": {
        fontSize: "inherit",
      },
    },
  },
}));

const Filter = ({
  category,
  handleDelete,
  colorFilters,
  colors,
  categories,
}) => {
  const classes = useStyles();
  const [countryVal, setCountryVal] = React.useState(null);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.productSearch);
  const countries = Country.getAllCountries();

  // React.useEffect(() => {
  //   if (filters.hasOwnProperty("origin") === false) {
  //     setCountryVal(null);
  //   }
  // }, [!filters.hasOwnProperty("origin")]);

  const handleColorCheck = (id) => (event, value) => {
    value
      ? dispatch(productSearchActions.setSearch({ name: "color", value: id }))
      : dispatch(productSearchActions.removeSearch({ name: "color", value: id }));
  };

  const handleCountryChange = (event, value) => {
    value
      ? dispatch(
          productSearchActions.setSearch({ name: "origin", value: value?.name })
        )
      : dispatch(productSearchActions.removeSearch({ name: "origin" }));
    setCountryVal(value);
  };
  return (
    <>
      <Box marginTop={1}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" align="left" gutterBottom>
              Filters
            </Typography>
          </Grid>
          <Grid item>
            <FilterAltIcon fontSize="small" />
          </Grid>
        </Grid>
        <Grid container marginBottom={1} gap={1} padding={1}>
          {filters?.category ? (
            <Chip
              label={category?.name}
              variant="outlined"
              onDelete={handleDelete({ name: "category" })}
            />
          ) : (
            ""
          )}
          {filters?.color
            ? colorFilters.map((d) => (
                <Chip
                  label={d.name}
                  key={d.id}
                  variant="outlined"
                  onDelete={handleDelete({ name: "color", value: d.id })}
                />
              ))
            : ""}
          {filters?.origin ? (
            <Chip
              label={filters.origin}
              variant="outlined"
              onDelete={handleDelete({ name: "origin" })}
            />
          ) : (
            ""
          )}
          {filters?.price_max ? (
            <Chip
              label={`${filters.price_min} ₹ -- ${filters.price_max} ₹`}
              variant="outlined"
              onDelete={handleDelete({ name: "price" })}
            />
          ) : (
            ""
          )}
        </Grid>
        <Divider />
        <Box marginTop={1} marginBottom={1}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h5" align="left">
                Product Categories
              </Typography>
            </Grid>
            <Grid item>
              <FolderIcon fontSize="small" />
            </Grid>
          </Grid>
          <Categories categories={categories} />
          <Divider />
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h5" align="left">
                Price
              </Typography>
            </Grid>
            <Grid item>
              <CurrencyRupeeIcon fontSize="small" />
            </Grid>
          </Grid>
          <RangeSlider />
          <Divider />
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h5" align="left">
                Countries
              </Typography>
            </Grid>
            <Grid item>
              <PublicIcon fontSize="small" />
            </Grid>
          </Grid>

          <Box marginTop={1} marginBottom={1}>
            <Autocomplete
              options={countries}
              value={countryVal}
              onChange={handleCountryChange}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box component="li" sx={{ mr: 2, flexShrink: 0 }} {...props}>
                  {option.flag} {option.name}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </Box>
          <Divider />
        </Box>
        <Box marginTop={1} marginBottom={1}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h5" align="left">
                Colour
              </Typography>
            </Grid>
            <Grid item>
              <FormatPaintIcon fontSize="small" />
            </Grid>
          </Grid>
          <FormGroup>
            <Grid container>
              {colors?.map((d) => {
                // console.log(filters.color?filters?.color?.includes(d.id):false,'sjfkjs',d.id)
                return (
                  <Grid key={d.id} item xs={6}>
                    <FormGroup className={classes.checkForm}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              filters.color
                                ? filters?.color?.includes(d.id)
                                : false
                            }
                            size="small"
                            id={`color${d.id}`}
                            onChange={handleColorCheck(d.id)}
                          />
                        }
                        label={d.name}
                        sx={{ fontSize: "5px" }}
                      />
                    </FormGroup>
                  </Grid>
                );
              })}
            </Grid>
          </FormGroup>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default Filter;
