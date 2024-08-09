import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
/* import { SetUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux'; */

const Layout = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  console.log(user);
  /*  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  dispatch(SetUser(userData));
 */
  return (
    user && (
      <div className='layout p-1'>
        <div className='header bg-primary flex justify-between p-2'>
          <div>
            <h1 className='text-2xl text-white cursor-pointer'>
              <Link className='reset' to='/'>
                Book My Show
              </Link>
            </h1>
          </div>

          <div className='bg-white p-1 flex gap-1'>
            <i className='ri-shield-user-line text-primary cursor-pointer'></i>
            <h1
              className='text-sm underline'
              onClick={() => {
                if (user.isAdmin) {
                  navigate('/admin');
                } else {
                  navigate('/profile');
                }
              }}>
              {user.name}
            </h1>

            <i
              className='ri-logout-box-r-line cursor-pointer'
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}></i>
          </div>
        </div>
        <div className='content mt-1 p-1'>
          <Outlet />
        </div>
      </div>
    )
  );
};

export default Layout;
