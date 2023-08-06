import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import css from './AuthHome.module.css';

export const UnAuthHome = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div className={css.home_container}>
      <div className={css.home_text_container}>
        <h1>Welcome to our Phonebook app!</h1>
        <p>Please sign up or sign in to use our service</p>

        <ul>
          {isDesktopOrLaptop ? (
            <li className={css.home_button_container}>
              <Link className={css.home_button} to="login">
                Sign in
              </Link>
              <Link className={css.home_button} to="register">
                Sign up
              </Link>
            </li>
          ) : (
            <li>
              <Link className={css.home_button} to="login">
                Sign in
              </Link>
              <Link className={css.home_button} to="register">
                Sign up
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
