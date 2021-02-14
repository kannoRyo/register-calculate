
import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type Props = {
    color: string,
    handleColor: (e: React.ChangeEvent<{ value: unknown }>) => void,
    label: string
}


const InputColor = ({color, handleColor, label}: Props)=>{

	return (
        <FormControl variant="outlined" >
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={color}
            onChange={handleColor}
            label={label}
            >
            <MenuItem value="">
             <em>{label}</em>
            </MenuItem>
            <MenuItem value="black">黒</MenuItem>
            <MenuItem value="brown">茶</MenuItem>
            <MenuItem value="red">赤</MenuItem>
            <MenuItem value="orange">橙</MenuItem>
            <MenuItem value="yellow">黄</MenuItem>
            <MenuItem value="green">緑</MenuItem>
            <MenuItem value="blue">青</MenuItem>
            <MenuItem value="violet">紫</MenuItem>
            <MenuItem value="gray">灰</MenuItem>
            <MenuItem value="white">白</MenuItem>
            <MenuItem value="gold">金</MenuItem>
            <MenuItem value="silver">銀</MenuItem>
            </Select>
        </FormControl>
)
}

export default InputColor
