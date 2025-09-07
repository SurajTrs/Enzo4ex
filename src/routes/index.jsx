import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Announcements from '../components/Announcements/Announcements';
import AnnouncementDetail from '../pages/AnnouncementDetail';
import Forex from '../pages/Forex';
import Indices from '../pages/Indices';
import Commodities from '../pages/Commodities';
import Crypto from '../pages/Crypto';
import Stocks from '../pages/Stocks';
import Etf from '../pages/Etf';
import Futures from '../pages/Futures';
import PageNotFound from '../components/common/PageNotFound';

// Import other pages as needed
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
      {
        path: 'announcements',
        element: <Announcements />,
      },
      {
        path: 'announcements/:slug',
        element: <AnnouncementDetail />,
      },
      // Markets
      {
        path: 'indices',
        element: <Indices />,
      },
      {
        path: 'commodities',
        element: <Commodities />,
      },
      {
        path: 'crypto',
        element: <Crypto />,
      },
      {
        path: 'stocks',
        element: <Stocks />,
      },
      {
        path: 'etf',
        element: <Etf />,
      },
      {
        path: 'futures',
        element: <Futures />,
      },
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
