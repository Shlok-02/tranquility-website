import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Activites from './components/Activites/Activites';
import Books from './components/Books/Books';
import Jokes from './components/Jokes/Jokes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/activities" element={<Activites/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/jokes" element={<Jokes/>} />
{/*           
          <Route path="/lofi" element={<Lofi/>} />
          <Route path="/meditate" element={<Meditation/>} /> */}
        </Routes>
      </BrowserRouter>  
    </div>
  );  
}

export default App;
