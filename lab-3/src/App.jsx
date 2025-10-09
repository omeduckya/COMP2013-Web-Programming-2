import './App.css';
import ColorBoxesContainer from './Components/ColorBoxesContainer';
import data from './data/data';

function App() {
  return (
    <>
      <ColorBoxesContainer colors={data} />
    </>
  );
}

export default App;
