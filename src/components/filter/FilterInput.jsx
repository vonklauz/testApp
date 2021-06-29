import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FilterInput({ placeholder = "", options = [] }) {
    return (
        <TextField  className="filter-item" label={placeholder}  variant="outlined" />
    )
}