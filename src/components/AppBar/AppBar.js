import AuthNav from 'components/AuthNav/AuthNav.js';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.appBar_container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
