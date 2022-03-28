
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MainHall from './Components/MainHall'
import SeatingLayout from './Components/SeatingLayout';
import Theater from './Pages/Theater';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/theater" element={<Theater/>}/>
      <Route path="/seatingLayout" element={<SeatingLayout/>}/>
      <Route path="/mainHall" element={<MainHall/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
