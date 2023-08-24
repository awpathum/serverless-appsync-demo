export const getBookById = `
    query getBookById($id: ID!) {
        getBookById(bookId: $id) {
            author
            bookId
            description
            price
            description
            title
        }
    }
`