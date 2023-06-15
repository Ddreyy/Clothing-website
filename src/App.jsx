import './App.css'
import { Routes, Route} from "react-router-dom";
import Men from './components/Pages/Men'
import Header from './components/Header'
import HomePage from './components/Pages/HomePage'

function App() {

  return (
    <>
    
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<Men />} />
        
      </Routes>  
     
    </>
  )
}

export default App;
