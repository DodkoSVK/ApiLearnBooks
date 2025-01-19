import React, { useRef, FormEvent, ChangeEvent } from 'react'
import { debounce } from 'lodash-es'
import { Book } from '../../assets/types'

interface Props{        
    books: Book[]
}
const BooksTable: React.FC<Props> = (props) => {
    const searchInput = useRef<HTMLInputElement>(null)
   
    
    const { books} = props
    //Handlers
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchForBooks();
    }
    const handleBookName = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForBooks();
    }, 500)
    const searchForBooks = () => {
        console.log(searchInput.current?.value)
    }
    

    const handleBookGenre = (e: ChangeEvent<HTMLInputElement>) => {
        setBookGenre(e.target.value);
    }    
    const handleBookRating = (e: ChangeEvent<HTMLInputElement>) => {
        setBookRating(e.target.value);
    }
   
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-stone-400 border-solid mx-10 mt-10">
            <table className="w-full text-lg text-left rtl:text-right text-gray-800">
                <thead>
                    <tr className="text-xs text-gray-700 uppercase bg-gray-50">
                        <th scope="col" className="px-6 py-3">Book name</th>
                        <th scope="col" className="px-6 py-3">Book genre</th>
                        <th scope="col" className="px-6 py-3">Book rating</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>(
                        <tr key={book.id} className="bg-white border-b hover:bg-gray-600 hover:text-white group">
                        <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap group-hover:text-white">{book.name}</td>
                        <td className="px-6 py-3">{book.genre}</td>
                        <td className="px-6 py-3">{book.rating}</td>
                        <td className="px-6 py-3 text-right">
                            <a href="#" className="font-medium text-blue-600 hover:underline group-hover:text-white">Edit</a>
                        </td>                       
                    </tr> 
                    ))}                                          
                </tbody>                      
            </table>
        </div>         
        
    )
}

export default BooksTable