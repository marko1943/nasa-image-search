import useBeer from './hooks/useBeer';
import classes from './App.module.scss';

function App() {
  const beerData = useBeer();

  return (
    <div className={classes.App}>
      <h1>Have some beer</h1>

      <ul>
        {beerData.map((beer) => (
          <li key={beer.uid}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
