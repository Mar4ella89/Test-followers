import defaultImage from '../../images/Hansel.png';

import css from './FollowersPage.module.css';

const FollowersPage = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <img
          src={defaultImage}
          alt=""
          //   alt={title}
          loading="lazy"
          //   className={styles.image}
          //   src={imageError ? defaultImage : imgUrl}
          //   onError={handleImageError}
        />
        <div></div>
        <p>777 tweets</p>
        <p>100,501 Followers</p>
        <button type="button">Following</button>
      </li>
    </ul>
  );
};

export default FollowersPage;
