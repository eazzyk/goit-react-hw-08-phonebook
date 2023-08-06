import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useMediaQuery } from 'react-responsive';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className={css.userMenu}>
      {isDesktopOrLaptop && <p className={css.userMenu_welcome}>Welcome, {user.name}!</p>}
      <button className={css.logout_button} type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
