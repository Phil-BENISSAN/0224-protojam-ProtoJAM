import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {


  return (
    <section>

      <NavBar />
      <Outlet />
      
    </section>
  )

}

export default App
