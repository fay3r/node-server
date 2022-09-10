export const add = (first:number, second:number):number=> first+second;
export const mul = (first:number, second:number):number=> first*second;
export const sub = (first:number, second:number):number=> first-second;
export const divide = (first:number, second:number):number=> {
    if(second === 0){
        throw Error('cant divide by 0')
    }
    return first/second;
}
