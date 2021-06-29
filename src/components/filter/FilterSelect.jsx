import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default function FilterSelect({ placeholder = "", options = [] }) {
    return (
        <FormControl variant="outlined">
            <InputLabel>{placeholder}</InputLabel>
            <Select
                native
                value=""
                className="filter-item"
                label={placeholder}
            >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </Select>
        </FormControl>
    )
}