import { redirect } from 'react-router-dom';
import { GetCurrentUser } from '../apicalls/user';
import { SetUser } from '../redux/userSlice';
import { HideLoading, ShowLoading } from '../redux/loaderSlice';

export async function loader(dispatch) {
  try {
    dispatch(ShowLoading());
    const response = await GetCurrentUser();
    if (response.status === 'success') {
      dispatch(SetUser(response.data));
      return response.data;
    }

    return redirect('/login');
  } catch (error) {
    dispatch(SetUser(null));
  } finally {
    dispatch(HideLoading());
  }
}
