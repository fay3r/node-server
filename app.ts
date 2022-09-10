import express, { Request, Response } from 'express';
import { logger } from './middleware/add';
import { mathRouter } from './routes/math';
import { bookRouter } from './routes/books';

const app = express();

// middleware
app.use(express.json());
app.use('/', logger);

// routes
app.use('/math', mathRouter);
app.use('/books', bookRouter);

app.get('/', (req: Request, res: Response) => {
  res.send(`<p>Its working</p>`);
});

// not found
app.get('*', (req, res) => {
  res.status(404).send(`<h1>Not found</h1>`);
});

app.listen(8000, () => {
  console.info(`[server]: listening on http://localhost:8000`);
});
