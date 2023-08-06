import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    register({
      name,
      email,
      password,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.registerForm_container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.registerForm}>
        <label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={name}
            placeholder="Username"
            className={css.registerForm_input}
            minLength={2}
            pattern="^[a-zA-Zа-яА-Я\s]+$"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            required
            minLength={4}
            onChange={handleChange}
            value={email}
            placeholder="Email"
            className={css.registerForm_input}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            onChange={handleChange}
            value={password}
            placeholder="Password"
            className={css.registerForm_input}
          />
        </label>
        <button type="submit" className={css.registerForm_button}>
          Register
        </button>
      </form>
    </div>
  );
};
