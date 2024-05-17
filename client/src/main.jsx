import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import HomePage from './Pages/HomePage.jsx';
import ResultPage from './Pages/ResultPage.jsx'
import WelcomePage from './Pages/WelcomePage.jsx'
import Activity from './Pages/Activity.jsx';
import Loading from './Pages/Loading.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
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
      },
      {
        path: "/Loading",
        element: <Loading />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);