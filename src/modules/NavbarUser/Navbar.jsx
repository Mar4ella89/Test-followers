import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.navList}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="/tweets" className={css.navLink}>
        Tweets
      </NavLink>
      
    </div>
    </div>
    
  );
};

export default Navbar;
