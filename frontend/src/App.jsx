import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';

import './stylesheets/alignments.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/theme.css';
import './stylesheets/custom.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
