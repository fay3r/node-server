import express, {Request, Response} from 'express';
import {logger} from "./middleware/add";
import {mathRouter} from "./routes/math";

const app = express();

app.use(express.json())
app.use('/', logger)

app.use('/math', mathRouter)

app.get('/', (req: Request, res: Response) => {
    res.send(`<p>Its working</p>`)
})

app.get('*', (req, res) => {
    res.send(`<h1>Not found</h1>`)
})

app.listen(8000, () => {
    console.info(`[server]: listening on http://localhost:8000`)
})
