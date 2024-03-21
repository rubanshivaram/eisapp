import './App.css';
// import Header from "../src/Components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Aboutus from './Pages/Aboutus/aboutus';
import TrackRecord from './Pages/Trackrecord/trackrecord';
import Smecorner from './Pages/smecorner/smecorner';


function App() {
  return (
    <div className="App">
     

     
     <BrowserRouter>
     <Routes>
      <Route path='' element={< Home/>} />
      <Route path='aboutus' element={<Aboutus /> } />
      <Route path='trackrecord' element={<TrackRecord /> } />
      <Route path='smecorner' element={<Smecorner /> } />


      
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
