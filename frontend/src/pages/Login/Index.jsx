import { Form, message } from 'antd';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import { loginUser } from '../../apicalls/auth';

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const response = await loginUser(values);

      if (response.status === 'success') {
        message.success(response.message);

        /**
         * Saving session token in local storage
         */
        localStorage.setItem('token', response.data);

        navigate('/');
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className='card p-3 w-400'>
        <h1 className='text-xl mb-1'>Welcome Again! Please Login</h1>
        <hr />
        <Form layout='vertical' className='mt-1' onFinish={onSubmit}>
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <input type='email' />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              { required: true, message: 'Please input your password!' },
            ]}>
            <input type='password' />
          </Form.Item>

          <div className='flex flex-col mt-2 gap-1'>
            <Button fullWidth title='LOGIN' type='submit' />
            <Link to='/register' className='text-primary'>
              Don&apos;t have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
