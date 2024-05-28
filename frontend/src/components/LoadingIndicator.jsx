// LoadingIndicator.js

import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
  const { loading } = useSelector((state) => state.loaders);

  if (!loading) return null;

  return (
    <div className='loader-parent'>
      <div className='loader'></div>
    </div>
  );
};

export default LoadingIndicator;
