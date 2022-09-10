import Express,{Request, Response} from "express";
import {add, divide, mul, sub} from "../utils/mathCalculations";
import {TypedRequestBody} from "../types/TypedRequestBody";

export const mathRouter = Express.Router();

mathRouter.get('/add/:first&:second', (req: Request<{ first: string, second: string }>, res: Response) => {
    const {first, second} = req.params;
    const result = add(Number.parseInt(first, 10), Number.parseInt(second, 10))
    res.send(`<h1>Result of adding: ${result}</h1>`)
})

mathRouter.get('/sub', (req: Request<{},{},{},{first:number,second:number}>, res: Response) => {
    const {first, second} = req.query;
    const result = sub(first, second)
    res.send(`<h1>Result of adding: ${result}</h1>`)
})

mathRouter.get('/mul', (req: TypedRequestBody<{first:number,second:number}>, res: Response) => {
    const {first,second} = req.body
    if(first && second){
        const result = mul(first, second)
        res.send(`<h1>Result of adding: ${result}</h1>`)
    } else {
        res.status(400).send('Wrong data')
    }
})

mathRouter.get('/div/:first&:second', (req: Request<{ first: string, second: string }>, res: Response) => {
    const {first, second} = req.params;
    try {
        const result = divide(Number.parseInt(first, 10), Number.parseInt(second, 10))
        res.send(`<h1>Result of adding: ${result}</h1>`)
    } catch (e) {
        res.status(404).send(`<h1>Cant divide by 0</h1>`)
    }
})
