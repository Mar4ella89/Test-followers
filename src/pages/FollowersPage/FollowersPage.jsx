import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchAllUsers } from 'redux/users/user-operations';
import Container from 'components/Container/Container';

import GoitIcon from 'images/icons/GoitIcon';

import defaultImage from '../../images/Hansel.png';
// import defaultImage from '../../images/213.jpg';

import css from './FollowersPage.module.css';

const FollowersPage = () => {
  const users = useSelector(({ users }) => users.items);
  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <Container>
    <section className={css.section}>
      <ul className={css.list}>
      {users.map(({id,name,avatar,tweets,followers})=>(<li key={id} className={css.item}>
        <GoitIcon color={'#FFFFFF'} className={css.logo}/>
        <div className={css.middleLine}></div>

        <div className={css.avatarContainer}>
          <div className={css.avatarBack}>
            <img
              src={avatar || defaultImage}
              alt={name}
              loading="lazy"
                className={css.image}
            />
          </div>
        </div>
        <p className={css.userTitle}>{name}</p>

        <p className={css.text}>{tweets} tweets</p>
        <p className={css.text}>{followers.toLocaleString('en-US',{ useGrouping: true, minimumFractionDigits: 0 })} Followers</p>
        <button type="button" className={css.button}>Following</button>
      </li>))}
      
    </ul>
    </section>
    </Container>
  );
};

export default FollowersPage;
