import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';
//import ProtectedRoute from './components/ProtectedRoute';

import { loader as userLoader } from './utils/userLoader';
import { loader as tokenLoader } from './utils/tokenLoader';

import './stylesheets/alignments.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/theme.css';
import './stylesheets/custom.css';
import Layout from './components/Layout';
import { useDispatch } from 'react-redux';
import Admin from './pages/Admin/Index';
import Profile from './pages/Profile/Index';
import LoadingIndicator from './components/LoadingIndicator';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          loader={() => userLoader(dispatch)}
          element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/login' loader={tokenLoader} element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </>
    )
  );
  return (
    <>
      <LoadingIndicator />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
