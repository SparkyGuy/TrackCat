import logo from './logo.svg';
import './App.css';
import Items from './components/items/items';
import SearchBar from './components/searchBar/searchBar';

function App() {
  return (
   <div className="container">
    <div className='logo'>
      <h1>TRACKCAT</h1>
    </div>
    <div className="search-container">
      <div className='text'>
        <h1>
          RASTREIE SEU PEDIDO
        </h1>
        <h4>
          DE FORMA RÁPIDA E PRÁTICA
        </h4>
      </div>
   <div className='searchbar'>
    <SearchBar />
   </div>
    </div>
    <div className="items-container">
      <div className='items'>
        <Items />
      </div>
      <div className='items'>
        <Items />
      </div>
      <div className='items'>
        <Items />
      </div>
      <div className='items'>
        <Items />
      </div>
    </div>
  </div>




  );
}

export default App;
