import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUp, Login } from './pages';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
