import Express, { Request } from 'express';
import { TypedRequestBody } from '../types/TypedRequestBody';
import { NewBook } from '../types/Book';
import BookManager from '../services/booksDb';
import { body, param, validationResult } from 'express-validator';

export const bookRouter = Express.Router();

bookRouter.get(
  '/:id',
  param('id').trim().isNumeric().not().isEmpty(),
  (req: Request<{ id: string }>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    BookManager.getBookById(Number.parseInt(req.params.id, 10))
      .then((book) => {
        res.json(book);
      })
      .catch((error) => {
        res.status(400).json({ errorMessage: error });
      });
  }
);
bookRouter.get('/', (req: Request, res) => {
  BookManager.getAllBooks().then((books) => {
    res.send(books);
  });
});
bookRouter.delete(
  '/:id',
  param('id').trim().isNumeric().not().isEmpty(),
  (req: Request<{ id: string }>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    BookManager.deleteBookById(Number.parseInt(req.params.id, 10))
      .then(() => {
        res.send();
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json({ errorMessage: error });
      });
  }
);
bookRouter.post(
  '/',
  body(['title', 'author']).trim().not().isEmpty().isString(),
  (req: TypedRequestBody<NewBook>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    BookManager.addBook(req.body).then((id) => {
      res.json({ bookId: id });
    });
  }
);
