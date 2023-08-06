import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const sizes = {
  s: 40,
  m: 60,
  l: 80,
};

export const Loader = ({ size = 'l' }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="#87CEEB"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </div>
  );
};
