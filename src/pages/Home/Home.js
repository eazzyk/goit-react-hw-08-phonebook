import { AuthHome } from 'components/AuthHome/AuthHome';
import { UnAuthHome } from 'components/AuthHome/UnAuthHome';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <AuthHome /> : <UnAuthHome />;
};

export default Home;
