
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
