export const valueCalc = ( value: number | undefined , unit: string) =>{
    if( typeof value === 'undefined'){
        return
    }

    let power = 0
    if(unit === 'KΩ'){
        power  += 3
    }

    const str = value.toString()
    const first =  str.substring(0, 1)
    const second = str.substring(1, 2)

    while(value > 10){
        value = value / 10
        power++
    }
    
    return {
        first: first,
        second: second,
        power: power.toString()
    }
}