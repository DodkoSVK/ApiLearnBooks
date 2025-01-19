import { Routes, Route } from 'react-router'

//Components
import TheNavigation from './components/TheNavivation'
import TheHome from './views/Home';
import TheBooks from './views/Books';
import TheCreate from './views/Create';

function App() {
  return (
    <div className="App">
      <header className="flex justify-center items-center mt-10">        
        <TheNavigation />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/books" element={<TheBooks />} />
          <Route path="/create" element={<TheCreate />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App
