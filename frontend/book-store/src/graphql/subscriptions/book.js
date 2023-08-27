export const onCreateBook = `
subscription MySubscription {
    onCreateBook {
      author
      bookId
      title
    }
  }
`;