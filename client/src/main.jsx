import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import WelcomePage from './Pages/WelcomePage.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element:<WelcomePage />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);