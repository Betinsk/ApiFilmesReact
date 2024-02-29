import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import './pages/movieGrid.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
