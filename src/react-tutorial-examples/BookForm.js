//Examples of BookForm and BookList

import React, { useState } from 'react'

const BookForm = ({ addBook }) => {
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(author)
        setAuthor('')
    } 

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Author name:</label>
            <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="Add author"/>
        </form>
     );
}
 
export default BookForm;