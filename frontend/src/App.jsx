import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
