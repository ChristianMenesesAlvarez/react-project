import { useRoutes } from 'react-router-dom';
import { FrontPage } from './pages/FrontPage';
import { NewsPage } from './pages/NewsPage';
import { BackPage } from './pages/BackPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Users } from './pages/Users';

export function AppRoutes() {
  return useRoutes(
    [
      {
        element: <FrontPage />,
        path: '/'
      },
      {
        element: <FrontPage />,
        path: '/frontpage'
      },
      {
        element: <NewsPage />,
        path: '/news'
      },
      {
        element: <BackPage />,
        path: '/backpage'
      },
      {
        element: <Register />,
        path: '/register'
      },
      {
        element: <Login />,
        path: '/login'
      },
      {
        element: <Users />,
        path: '/users'
      },
      // {
      //   element: <NewsDetail />,
      //   path: '/news-details/:newsId'
      // },
    ]
  )
}