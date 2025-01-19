import { useState, useEffect } from "react";
import axios from "axios";
//Children
import BooksTable from "../components/books/BooksTable";

// Component
const TheBooks: React.FC = () => {
    //useState   
    const [books, setBooks] = useState([])
    
    const getBooks = () => {
        axios.get('http://localhost:3030/books').then(response => {
            console.log(response.data)
            setBooks(response.data)
        })
    }
    useEffect(() => {
        getBooks();
    }, [])
    //template
    return(
        <article>
            <div className="flex flex-col justify-center items-center p-5 text-white">
                <h1 className="text-2xl font-bold">Here you can see all book what we have.</h1>            
            </div>
            <BooksTable            
                books = { books }
            />
        </article>
        /* <>
               
                          
        </> */
    );
}

export default TheBooks

