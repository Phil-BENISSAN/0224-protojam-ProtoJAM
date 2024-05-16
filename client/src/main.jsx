import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import WelcomePage from './Pages/WelcomePage.jsx';

=======
import HomePage from './Pages/HomePage.jsx';
import ResultPage from './Pages/ResultPage.jsx'
import WelcomePage from './Pages/WelcomePage.jsx'
import Activity from './Pages/Activity.jsx';
>>>>>>> f6413a7f4ab274c08f173bdee3e10f00f64b8177

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
<<<<<<< HEAD
        path:"/",
        element:<WelcomePage />
=======
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/result",
        element: <ResultPage/>,
      },
      {
        path: "/Activity",
        element: <Activity/>,
>>>>>>> f6413a7f4ab274c08f173bdee3e10f00f64b8177
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);