import { FormEvent, useState } from "react";

const data = [
    {
        id: 1,
        bookName: "Harry Poser",
        bookGenre: "Fantasy",
        bookRating: 8.8
    },
    {
        id: 2,
        bookName: "Lord of the Rings",
        bookGenre: "Fantasy",
        bookRating: 10
    }
];

export const Books = () => {
    
    const [books, setBooks] = useState(data);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setBooks([{ id: books.length+1, bookName, bookGenre, bookRating}, ...books])
    }

    return (
    <>
    <nav className="p-8 bg-orange-400">
        <ul className="flex flex-row">
            <li className="mx-5 text-white text-xl font-bold hover:underline active:text-violet-600"><a href="#">Books</a></li>
            <li className="mx-5 text-white text-xl font-bold hover:underline active:text-violet-600"><a href="#">Create</a></li>
            <li className="mx-5 text-white text-xl font-bold hover:underline active:text-violet-600"><a href="#">Find</a></li>
        </ul>
    </nav>
    <main>
        <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5">                   
                <input
                    type="text"
                    name="bookName"
                    id="bookName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required/>
                <label 
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Book name
                    </label>
            </div>
            <div className="relative z-0 w-full mb-5">
                <input
                    type="text"
                    name="bookGenre"
                    id="bookGenre"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required/>
                <label
                    htmlFor="bookGenre"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Book Genre
                    </label>
            </div>
            <div className="relative z-0 w-full mb-5">
                <input type="text" name="bookRating" id="bookRating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="bookRating" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book Rating</label>
            </div>             
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hladaj</button>
        </form>
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
                            {data.map(({id: bookId, bookName, bookGenre, bookRating}) => (
                            <tr className="bg-white border-b hover:bg-gray-600 hover:text-white group" key={bookId}>
                                <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap group-hover:text-white">{bookName}</td>
                                <td className="px-6 py-3">{bookGenre}</td>
                                <td className="px-6 py-3">{bookRating}</td>
                                <td className="px-6 py-3 text-right">
                                    <a href="#" className="font-medium text-blue-600 hover:underline group-hover:text-white">Edit</a>
                                </td>
                            </tr>
                            ))}                            
                        </tbody>                       
                    </table>
                </div>          
    </main>
</>)};