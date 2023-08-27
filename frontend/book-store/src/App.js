import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import './App.css';
import { API, graphqlOperation } from "aws-amplify";
import { getBookById } from "./graphql/queries/book";
import { onCreateBook } from "./graphql/subscriptions/book";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [book,setBook] = useState(null);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateBook)).subscribe({
      next: (result) => {
        console.log(result);
        toast("new book added!");
        const newBook = result.value.data.onCreateBook;
        setBook(newBook);
      }
    })
  }, [])

  const getBook = async () => {
    // make a call to appSync api
    // const book = await API.graphql(graphqlOperation(getBookById, {id: "78a59f13-70d1-4a31-9631-ba39882b0533"}));
    const book = await API.graphql({query: getBookById, variables: {id: "78a59f13-70d1-4a31-9631-ba39882b0533"}, authMode: 'AWS_IAM'});
    setBook(book.data.getBookById);
  }

  const viewBook = () => {
    if (book) {
      return (<article>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <h4>{book.price}</h4>
      </article>)
    }
  }

  return (
    <div>
      My App
      <section className="book-section">
        <button onClick={() => getBook()}>Get Book Details</button>

        <hr></hr>
        {viewBook()}
      </section>
    </div>
  );
}

export default withAuthenticator(App);
// export default App;