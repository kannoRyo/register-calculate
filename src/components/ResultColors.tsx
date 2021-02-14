import React from 'react'

type Props = {
    color1: string,
    color2: string,
    color3: string,
    color4: string,
}

const ResultColors = ({color1, color2, color3, color4}: Props)=>{

	return (
    <>
        <div className="space_large" />
        <div className="result-colors" >
            <div className="square" style={{backgroundColor: `${color1}`}} />
            <div className="square" style={{backgroundColor: `${color2}`}} />
            <div className="square" style={{backgroundColor: `${color3}`}} />
            <div className="square" style={{backgroundColor: `${color4}`}} />
        </div>
    </>
)
}

export default ResultColors
