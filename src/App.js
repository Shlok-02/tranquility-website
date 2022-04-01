import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Activites from './components/Activites/Activites';
function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
        <Routes>
        {/*   <Route path="/" element={<Home/>} /> */}
          <Route path="/activities" element={<Activites/>} />
{/*           <Route path="/jokes" element={<Jokes/>} />
          <Route path="/lofi" element={<Lofi/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/meditate" element={<Meditation/>} /> */}
        </Routes>
      </BrowserRouter>  
    </div>
  );  
}

export default App;
