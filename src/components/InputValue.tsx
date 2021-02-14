import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

type Props = {
    value: number | undefined,
    handleValue: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const useStyles = makeStyles({
    input:{
        width: "85px",
    }
})

const InputValue = ({value, handleValue}: Props)=>{
    const classes = useStyles()

	return (
    <>
    <TextField
        type="string"
        value={value}
        label="入力抵抗値"
        margin="dense"
        onChange={(e)=> handleValue(e)}
        className={classes.input}
        InputLabelProps={{
            shrink: true
        }}
    />
    </>
)
}

export default InputValue
