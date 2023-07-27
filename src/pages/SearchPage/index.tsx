import ShowPage from '@pages/ShowPage';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
      <h1>Hello, I'm a search page.</h1>
      <ShowPage />
    </div>
  );
};

export default SearchPage;
