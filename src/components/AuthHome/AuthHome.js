import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import css from './AuthHome.module.css';

export const AuthHome = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <div className={css.home_container}>
      <div className={css.home_text_container}>
        <h1>Welcome back, {userName}!</h1>
        <p>Your current email: {userEmail}</p>
        <p className={css.home_contact_text}> Click the button below to view the contact storage</p>
        <ul>
          <li>
            <Link className={css.home_button} to="/contacts" id="contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
