import React from 'react'

type Props = {
	codeColor: string
}

const ShowColors = ({codeColor}: Props)=>{
	return (
	<div style={{marginTop: '15px'}} >
		<div className="square" style={{backgroundColor: `${codeColor}`}} />
	</div>
)
}

export default ShowColors
