import defaultImage from '../../images/Hansel.png';

import css from './FollowersPage.module.css';

const FollowersPage = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <div className={css.middleLine}></div>

        <div className={css.avatarContainer}>
          <div className={css.avatarBack}>
            <img
              src={defaultImage}
              alt=""
              //   alt={title}
              loading="lazy"
                className={css.image}
              //   src={imageError ? defaultImage : imgUrl}
              //   onError={handleImageError}
            />
          </div>
        </div>

        <p>777 tweets</p>
        <p>100,501 Followers</p>
        <button type="button">Following</button>
      </li>
    </ul>
  );
};

export default FollowersPage;
