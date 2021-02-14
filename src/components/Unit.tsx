import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type Props = {
    unit: string,
    handleUnit: (e: React.ChangeEvent<{ name?: string | undefined; value: unknown;}>) => void
}

const Unit = ({unit, handleUnit}: Props)=>{

	return (
	<div>
                <FormControl style={{width: '60px'}} >
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    onChange={handleUnit}
                    >
                    <MenuItem value={"Ω"}>Ω</MenuItem>
                    <MenuItem value={"KΩ"}>KΩ</MenuItem>
                    </Select>
                </FormControl>        
    </div>
)
}

export default Unit
