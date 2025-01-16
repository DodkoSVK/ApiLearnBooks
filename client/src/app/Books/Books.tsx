export const Books = () => (
<>
    <nav className="flex justify-start items-center bg-red-950 px-8 py-3 h-20">
        <ul className="flex">
            <li className="mr-6">
                <a aria-current="page" className="text-white font-bold hover:underline underline" href="/">Books</a>
            </li>
            <li className="mr-6">
              <a className="text-white font-bold hover:underline" href="/">Create</a>
            </li>
            <li className="mr-6">
                <a className="text-white font-bold hover:underline" href="/">Search</a>
            </li>
        </ul>
    </nav>
</>)