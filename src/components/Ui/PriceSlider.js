import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from "react-redux";
import { getFilter, filterActions } from "../../redux/reducers/filterSlice";


function valuetext(value) {
  return `${value}°C`;
}
const marks=[
  {
    value: 0,
    label: 0
  },
  {
    value: 250,
    label: 250
  },
  {
    value: 500,
    label: 500
  },
  {
    value: 750,
    label: 750
  },
  {
    value: 1000,
    label: 1000
  },
  
  
]

export default function RangeSlider() {
 
  const [value, setValue] = React.useState([0,2000]);
  const filters = useSelector(state=>state.filter.searchData)
  React.useEffect(() => {
    if(filters.hasOwnProperty('price_min') == false){
      setValue([0,2000])
    }
    else{
      setValue([filters.price_min, filters.price_max])
    }
  }, [!filters.hasOwnProperty('price_min')]);
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // props.getValue(newValue);
    const val = newValue
    if(val[0] === 0 && val[1] === 1000  ){
      dispatch(filterActions.remSearch({name:'price_min'}))
      dispatch(filterActions.remSearch({name:'price_max'}))
    }
    else{
      dispatch(filterActions.setSearch({name:"price_min", value: val[0]}))
      dispatch(filterActions.setSearch({name:"price_max", value: val[1]}))
    }
    // dispatch(getFilter("nothing") )
  };
  
 
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        step={50}
        marks={marks}
        min={0}
        max={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
      />
      
    </Box>
  );
}
