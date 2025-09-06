import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Forex from '../pages/Forex';
import PageNotFound from '../components/common/PageNotFound';

// Import other pages as needed
// import Indices from '../pages/Indices';
// import Commodities from '../pages/Commodities';
// import Crypto from '../pages/Crypto';
// import Login from '../pages/Login';
// import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'forex',
        element: <Forex />,
      },
      // Add more routes here as you create the components
      // {
      //   path: 'indices',
      //   element: <Indices />,
      // },
      // {
      //   path: 'commodities',
      //   element: <Commodities />,
      // },
      // {
      //   path: 'crypto',
      //   element: <Crypto />,
      // },
      // {
      //   path: 'login',
      //   element: <Login />,
      // },
      // {
      //   path: 'register',
      //   element: <Register />,
      // },
    ],
  },
]);

export default router;
