import Container from 'components/Container/Container';

import css from './HomePage.module.css';

import backgroundImage from '../../images/backphoto_1.png';

const HomePage = () => {
  return (
    <Container>
      <section className={css.section}>
        <img src={backgroundImage} alt="backgroundImage" className={css.img}/>
        <p className={css.text}>HOME page coming soon...</p>
      </section>
      </Container>
  );
};

export default HomePage;
