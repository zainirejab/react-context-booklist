import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;

// This is the original BookContext without reducer and dispatch
/* import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: "The Winter War", author: "Pasi Tuunainen"},
        {id: 2, title: "Perang 1973", author: "Zaini Rejab"}
    ])

    const addBook = (title, author) => {
        setBooks([...books, {id: uuidv4(), title, author }]) // {title: title, author: author}
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id)) // (book) => {return book.id !== id}
    }
    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider; */