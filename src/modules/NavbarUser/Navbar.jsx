import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.navList}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
      <NavLink to="/followers">Followers</NavLink>
    </div>
  );
};

export default Navbar;
