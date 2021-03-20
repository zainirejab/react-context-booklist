import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} 
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="book author" value={author} 
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add book" />
        </form>
    );
}
    
export default BookForm;

// This is the original BookForm without reducer and dispatch
/* import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} 
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="book author" value={author} 
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add book" />
        </form>
    );
}
    
export default BookForm; */