import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav_container}>
      <NavLink to="/register" className={css.authNav_link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authNav_link}>
        Log In{' '}
      </NavLink>
    </div>
  );
};

export default AuthNav;
