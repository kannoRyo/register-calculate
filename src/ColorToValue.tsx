import React, {useState} from 'react';
import './assets/css/App.css';
import { InputColor, ShowColors, ResultResister } from './components/index'
import { codeToColors } from './utils/colorToCode'
import { colorToNumber } from './utils/colorToNumber'
import { calculateResult } from './utils/calculateResult'
import { Button } from '@material-ui/core';

type Colors = "black" | "brown" | "red"

const ColorToValue = ({history}: any) => {
  const [ color1, setColor1 ] = useState<Colors>('black')
  const [ color2, setColor2 ] = useState<Colors>('black')
  const [ color3, setColor3 ] = useState<Colors>('black')
  const [ color4, setColor4 ] = useState<Colors>('black')

  const codeColor1: string = codeToColors[color1]
  const codeColor2: string = codeToColors[color2]
  const codeColor3: string = codeToColors[color3]
  const codeColor4: string = codeToColors[color4]

  const numColor1: number =  colorToNumber[color1]
  const numColor2: number =  colorToNumber[color2]
  const numColor3: number =  colorToNumber[color3]
  const numColor4: number =  colorToNumber[color4]

  const handleColor1 = (e: React.ChangeEvent<{ value: unknown }>) => { 
    setColor1(e.target.value as Colors ) 
  }

  const handleColor2 = (e: React.ChangeEvent<{ value: unknown }>) => { 
    setColor2(e.target.value as Colors ) 
  }

  const handleColor3 = (e: React.ChangeEvent<{ value: unknown }>) => { 
    setColor3(e.target.value as Colors ) 
  }

  const handleColor4 = (e: React.ChangeEvent<{ value: unknown }>) => { 
    setColor4(e.target.value as Colors ) 
  }

  const result: number = calculateResult(numColor1, numColor2, numColor3, numColor4) 

  return (
    <div className="box">
      <div className="header">
        <Button  variant="contained" color="primary" size="large" onClick={()=> history.push("/input")} >切り替え</Button>
        <h3>色→抵抗値モード</h3>
      </div>
      <div className="input-selects">
        <InputColor
          color={color1}
          handleColor={handleColor1}
          label="色1"
        />
        <InputColor
          color={color2}
          handleColor={handleColor2}
          label="色2"
        />
        <InputColor
          color={color3}
          handleColor={handleColor3}
          label="色3"
        />
        <InputColor
          color={color4}
          handleColor={handleColor4}
          label="色4"
        />
      </div>
      <div className="show-colors">
        <ShowColors
          codeColor={codeColor1}
        />
        <ShowColors
          codeColor={codeColor2}
        />
        <ShowColors
          codeColor={codeColor3}
        />
        <ShowColors
          codeColor={codeColor4}
        />
      </div>
        <ResultResister
          result={result}
        />
    </div>
  );
}

export default ColorToValue;
