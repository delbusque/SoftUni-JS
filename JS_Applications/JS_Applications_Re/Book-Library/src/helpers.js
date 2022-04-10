export function checkBookForm(bookData) {

    return Object.values(bookData).every(v => v);
};

export const likesData = new Map();