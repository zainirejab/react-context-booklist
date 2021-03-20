//Examples of BookList and BookForm

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookForm from './BookForm';

const BookList = () => {
    const [books, setBooks] = useState([
        {id: 1, author: "Jeremy Black"},
        {id: 2, author: "Simon Bolivar"}
    ])

    const addBook = (author) => {
        setBooks([...books, {id: uuidv4(), author: author}])
    } 
    return ( 
        <div>
            Author
            <ul>
                {books.map((book) => ( <li key={book.id}>{book.author}</li> ))}
            </ul>
            <BookForm addBook={addBook}/>
        </div>
     );
}
 
export default BookList;