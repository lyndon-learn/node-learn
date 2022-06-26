const Book = require("../models/Book");

exports.addBook = async (bookObj) => {
  const ins = await Book.create(bookObj);
  return ins.toJSON();
};

exports.deleteBook = async (bookId) => {
  const result = await Book.destroy({
    where: {
      id: bookId,
    },
  });
  return result;
};

exports.updateBook = async (bookId, bookObj) => {
  const result = await Book.update(bookObj, {
    where: {
      id: bookId,
    },
  });
  return result;
};
