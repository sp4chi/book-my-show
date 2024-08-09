import { redirect } from 'react-router-dom';
import { GetCurrentUser } from '../apicalls/user';
import { SetUser } from '../redux/userSlice';
import { HideLoading, ShowLoading } from '../redux/loaderSlice';
import { message } from 'antd';

export async function loader(dispatch) {
  if (localStorage.getItem('token')) {
    return getpresentUser(dispatch);
  }
  return redirect('/login');
}

const getpresentUser = async (dispatch) => {
  try {
    dispatch(ShowLoading());

    const response = await GetCurrentUser();

    if (response.status === 'success') {
      dispatch(SetUser(response.data));

      return response.data;
    } else {
      dispatch(SetUser(null));

      message.error(response.message);

      localStorage.removeItem('token');

      return redirect('/login');
    }
  } catch (error) {
    dispatch(SetUser(null));

    message.error(error.message);

    return error.message;
  } finally {
    dispatch(HideLoading());
  }
};
