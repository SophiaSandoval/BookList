import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}){
    const [title, SetTitle] = useState(book.title)
    const {editBookById} = useBooksContext()

    const handleChange = (event) => {
        SetTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit()
        editBookById(book.id, title)
        }
    
    
    
    return( 
    <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>
    )
}

export default BookEdit;