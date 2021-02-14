import React,{useState, useEffect} from 'react'
import Unit from './Unit';

type Props = {
    result: number
}

const ResultResister = ({result}: Props)=>{
    const [unit, setUnit] = useState('')
    const [calculatedResult, setCalculatedResult] = useState(0)

    const handleUnit = (e: React.ChangeEvent<{ name?: string | undefined; value: unknown;}>) => {
        setUnit(e.target.value as string )
    }

    useEffect(() => {
        console.log('aa')
        if( unit === 'KΩ' ){
            const calc = result / 1000
            setCalculatedResult(calc)
        }else if( unit === 'Ω' ){
            setCalculatedResult(result)
        }
    },[result])

    useEffect(() => {
        console.log('aa')
        if( unit === 'KΩ' ){
            const calc = result / 1000
            setCalculatedResult(calc)
        }else if( unit === 'Ω' ){
            setCalculatedResult(result)
        }
    },[unit])

    return (
        <>
        <div className="space_medium" />
        {
            result === null ? (
                <p>抵抗値を入力してください</p>
            ):(

             <div className="result" >
                <Unit
                    unit={unit}
                    handleUnit={handleUnit}
                /> 
                <p style={{fontSize:"24px"}} >{calculatedResult}{unit}</p>
             </div>
            )
        }
        </>
    )
}

export default ResultResister
