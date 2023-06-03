import Container from 'components/Container/Container';

import GoitIcon from 'images/icons/GoitIcon';

import defaultImage from '../../images/Hansel.png';
// import defaultImage from '../../images/213.jpg';

import css from './FollowersPage.module.css';

const FollowersPage = () => {
  return (
    <Container>
    <section className={css.container}>
      <ul className={css.list}>
      <li className={css.item}>
        <GoitIcon color={'#FFFFFF'} className={css.logo}/>
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
        <p className={css.userTitle}>Bob Dylan</p>

        <p className={css.text}>777 tweets</p>
        <p className={css.text}>100,501 Followers</p>
        <button type="button" className={css.button}>Following</button>
      </li>

      <li className={css.item}>
        <GoitIcon color={'#FFFFFF'} className={css.logo}/>
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
        <p className={css.userTitle}>Bob Dylan</p>

        <p className={css.text}>777 tweets</p>
        <p className={css.text}>100,501 Followers</p>
        <button type="button" className={css.button}>Following</button>
      </li>
    </ul>
    </section>
    </Container>
  );
};

export default FollowersPage;
