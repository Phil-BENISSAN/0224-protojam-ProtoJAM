import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import HomePage from './Pages/HomePage.jsx';
import ResultPage from './Pages/ResultPage.jsx'
import WelcomePage from './Pages/WelcomePage.jsx'
import Activity from './Pages/Activity.jsx';

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
        element: <HomePage/>
      },
      {
        path: "/result",
        element: <ResultPage/>,
      },
      {
        path: "/Activity",
        element: <Activity/>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);