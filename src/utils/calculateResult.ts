export const calculateResult = (color1: number, color2: number, color3: number, color4: number) => {
    let result = (color1 * 10 + color2) * ( Math.pow(10, color3) ) 

    return result
}