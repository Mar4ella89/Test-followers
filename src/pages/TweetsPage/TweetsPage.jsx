import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import { fetchAllUsers, toggleFollow } from 'redux/users/user-operations';

import Container from 'components/Container/Container';

import GoitIcon from 'images/icons/GoitIcon';

import defaultImage from '../../images/Hansel.png';
// import defaultImage from '../../images/213.jpg';

import css from './TweetsPage.module.css';

const TweetsPage = () => {
  const users = useSelector(({ users }) => users.items);
  const navigate = useNavigate();
  const [displayedTweets, setDisplayedTweets] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    setDisplayedTweets(displayedTweets + 6);
    setCurrentPage(currentPage + 1);
  };

  console.log(users);

  const dispatch = useDispatch();

  const followStatus = useSelector(({ users }) => users.followStatus);

  const handleClick = (id, followers) => {
    dispatch(toggleFollow({ id, followers }));
  };

  useEffect(() => {
    dispatch(fetchAllUsers(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Container>
      <section className={css.section}>
      <button
        className={css.buttonBack}
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
        <ul className={css.list}>
          {users
            .slice(0, displayedTweets)
            .map(({ id, name, avatar, tweets, followers }) => (
              <li key={id} className={css.item}>
                <GoitIcon color={'#FFFFFF'} className={css.logo} />
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
                <p className={css.text}>
                  {followers.toLocaleString('en-US', {
                    useGrouping: true,
                    minimumFractionDigits: 0,
                  })}{' '}
                  Followers
                </p>
                <button
                  type="button"
                  onClick={() => handleClick(id, followers)}
                  className={css.buttonFollow}
                  style={{ backgroundColor: followStatus[id] ? '#5CD3A8' : '' }}
                >
                  {followStatus[id] ? 'Following' : 'Follow'}
                </button>
              </li>
            ))}
        </ul>
        {displayedTweets < users.length && (
          <button onClick={handleLoadMore} className={css.button}>
            Load more
          </button>
        )}
      </section>
    </Container>
  );
};

export default TweetsPage;
