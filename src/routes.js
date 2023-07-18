const addBooksHandler = require('./handler/addbooks');
const getAllBooksHandler = require('./handler/get-books');
const getBooksByIdHandler = require('./handler/get-id-books');
const editBooksByIdHandler = require('./handler/edit-book');
const deleteBooksByIdHandler = require('./handler/delete-books');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksByIdHandler,
  },
];

module.exports = routes;
