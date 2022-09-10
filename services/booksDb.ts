import { Book, NewBook } from '../types/Book';

let lastId = 1;

const books: Book[] = [];

const addBook = async (newBook: NewBook) => {
  books.push({
    ...newBook,
    id: lastId,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  return lastId++;
};

const getAllBooks = async () => {
  return books;
};

const getBookById = async (bookId: number) => {
  const book = books.find(({ id }) => id === bookId);
  if (book) {
    return book;
  } else {
    throw 'no book with that id';
  }
};

const deleteBookById = async (bookId: number): Promise<void> => {
  const index = books.findIndex(({ id }) => id === bookId);
  if (index >= 0) {
    books.splice(index, 1);
  } else {
    throw 'no book with that id';
  }
};

export default { addBook, getAllBooks, getBookById, deleteBookById };
