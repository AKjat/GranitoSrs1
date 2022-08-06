import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const CustomAutocomplete = ({sx, options, optionLabel, name, onChange, label,value}) => {
    const [displayValue, setDisplayValue] = React.useState(null)
    // React.useEffect(()=>{
    //     if(value){
    //         const index = options.findIndex((element)=> element.id == value)
    //         setDisplayValue(options[index]);
    //     };
    // },[value])
  return (
    <Autocomplete
        sx={sx?sx:null}
        value={displayValue}
        // inputValue={displayValue?displayValue[optionLabel]:null}
        options={options}
        getOptionLabel={(option)=>option[optionLabel]}
        isOptionEqualToValue={(option, value)=>{ console.log(option, value)
           return true}}
        onChange={(e, newValue)=>{
            setDisplayValue(newValue)
            onChange(name, newValue.id)}}
        renderInput={(params)=>(
            <TextField 
                {...params}
                label={label}
                inputProps={{...params.inputProps, autoComplete: "new-password"}}
            />
        )}
    />
  );
}
{/* <CustomAutocomplete
    sx={} 
    options={} 
    optionLabel={} 
    name={} 
    onChange={} 
    label={}
/> */}

export default CustomAutocomplete;
