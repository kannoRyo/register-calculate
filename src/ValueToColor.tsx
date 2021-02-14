import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { InputValue, Unit, ResultColors } from './components/index'
import { calculateResult } from './utils/calculateResult'
import { valueCalc } from './utils/valueCalc'
import { numberToCode } from './utils/numberToCode'

type num = {
    first: number,
    second: number,
    power: number
}

const ValueToColor = ({history}: any)=>{
    const [value, setValue] = useState<number>()
    const [unit, setUnit] = useState('')

    const [color1, setColor1] = useState("black")
    const [color2, setColor2] = useState("black")
    const [color3, setColor3] = useState("black")
    const [color4, setColor4] = useState("black")

    const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if( Number.isNaN(Number(e.target.value)) ){
            return
        }
        
        const num = Number(e.target.value)
        setValue(num)
    }
    
    const handleUnit = (e: React.ChangeEvent<{ name?: string | undefined; value: unknown;}>) => {
        setUnit(e.target.value as string )
    }

    useEffect(()=>{
        if(value){
            const {first, second, power}: any  = valueCalc(value, unit)
            if( typeof first === "string" && typeof power === "string" ){
                const color1 = numberToCode[first] 
                const color2 = numberToCode[second]
                const color3 = numberToCode[power]

                setColor1(color1)
                setColor2(color2)
                setColor3(color3)
            }
        }
    },[unit])

    useEffect(()=>{
        if(value){
            const {first, second, power}: any  = valueCalc(value, unit)
            if( typeof first === "string" && typeof power === "string" ){
                const color1 = numberToCode[first] 
                const color2 = numberToCode[second]
                const color3 = numberToCode[power]

                setColor1(color1)
                setColor2(color2)
                setColor3(color3)
            }
        }
    },[value])

	return (
	<div className="box" >
        <div className="header">
            <Button  variant="contained" color="primary" size="large" onClick={() => history.push("/")} >切り替え</Button>
            <h3>抵抗値→色モード</h3>
        </div>
        <div className="d-flex" >
            <InputValue 
                value={value}
                handleValue={handleValue}
            />
            <div style={{marginTop: '5px'}}>
                <Unit
                    unit={unit}
                    handleUnit={handleUnit}
                />
            </div>
        </div>
        <div className="space_medium" />
        <div className="calcValue" > 
            <h4>抵抗値</h4>
            <h3>{value} {unit}</h3>
        </div>
        <ResultColors 
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
        />
    </div>
)
}

export default ValueToColor
