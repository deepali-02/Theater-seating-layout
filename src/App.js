
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MainHall from './Components/MainHall'
import SeatingLayout from './Components/SeatingLayout';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/mainHall" element={<MainHall/>}/>
      <Route path="/seatingLayout" element={<SeatingLayout/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
