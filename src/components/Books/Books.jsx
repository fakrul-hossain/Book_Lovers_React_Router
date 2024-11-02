import { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {

    const [books,setBooks] = useState([]);
    console.log(books)
    useEffect(() =>{
        fetch("./booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },
    []) 
    return (
        <div>
            <h1 className="text-[40px] mt-10 text-green-500 font-bold text-center">Books</h1>
             <div className="grid gap-3 mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto px-2">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
             </div>

        </div>
    );
};

export default Books;