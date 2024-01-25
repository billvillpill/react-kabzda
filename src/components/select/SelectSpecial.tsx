import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import s from './SelectSpecial.module.css';

type ItemProps = {
    title: string
    value: any
}
type SelectSpecialProps = {
    value: string | undefined
    onChange: (e: SelectChangeEvent) => void
    items: ItemProps[]
}

export const SelectSpecial = (props: SelectSpecialProps) => {
    return (
        <div className={s.select}>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.value}
                    label="Age"
                    onChange={props.onChange}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {props.items.map(el => <MenuItem value={el.value}>{el.title}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
};
