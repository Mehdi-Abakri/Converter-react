import Header from '../Header/Header';
import './App.scss';
import Button from '../Button/Button';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <Currencies />
      <Amount />
    </div>
  );
}

export default App;
