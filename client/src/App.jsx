
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
