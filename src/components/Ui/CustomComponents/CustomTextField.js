import { TextField } from '@mui/material';
import React from 'react';

const CustomTextField = ({value, onChange, name, label, InputProps}) => {
  return (
    <TextField
        value={value}
        onChange={e=>onChange(name, e.target.value)}
        label={label}
        InputProps={InputProps}
    />
  );
}

export default CustomTextField;
