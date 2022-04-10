export default () => fetch('http://localhost:3030/jsonstore/collections/books')
    .then(res => res.json());