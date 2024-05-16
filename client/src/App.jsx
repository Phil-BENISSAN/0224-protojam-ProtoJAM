import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <section>

      <NavBar />
      <SearchBar />
      <Outlet />
      
    </section>
  )

}

export default App
