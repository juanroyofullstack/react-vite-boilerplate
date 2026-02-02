import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePageView from './features/homepage/views/HomePageView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePageView />,
      },
    ],
  },
]);

export default router;
