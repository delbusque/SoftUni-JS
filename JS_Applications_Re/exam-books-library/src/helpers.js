export function checkBookForm(bookData) {

    return Object.values(bookData).every(v => v);
};