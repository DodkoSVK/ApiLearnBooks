import { NavLink } from "react-router";

function TheNavigation() {
    return (
      <nav className="px-5 py-2 space-x-3 rounded-full border-2 border-white border-solid text-lg font-bold text-white">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-sky-600' : 'hover:text-sky-300'
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/books" 
          className={({ isActive }) => 
            isActive ? 'text-sky-600' : 'hover:text-sky-300'
          }
        >
          Books
        </NavLink>
        <NavLink 
          to="/create" 
          className={({ isActive }) => 
            isActive ? 'text-sky-600' : 'hover:text-sky-300'
          }
        >
          Create
        </NavLink>
      </nav>
    );
  }

export default TheNavigation