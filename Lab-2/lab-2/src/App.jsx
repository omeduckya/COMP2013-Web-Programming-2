import './App.css';
import Card from './Components/ResortsLite';

function App() {
  return( 
    <>
      <h1>Resorts Lite</h1>
      <hr />
      <div className="main-container">
        <Card image="src\assets\images\1.jpg" country="Indonesia" name="Gili Air Hotel" price="589" stars="4.8" />
        <Card image="src\assets\images\2.jpg" country="Seychelles" name="Hilton Resort" price="629" stars="4.2 " />
        <Card image="src\assets\images\3.jpg" country="US Virgin Islands" name="Goa Resort" price="485" stars="3.5" />
        <Card image="src\assets\images\4.jpg" country="Bahamas" name="Kuredu Resort" price="729" stars="4.1"  />
        <Card image="src\assets\images\5.jpg" country="Mauritius" name="Trou D'Eau Douce" price="877" stars="4.9"/>
        <Card image="src\assets\images\6.jpg" country="Bermuda" name="Stainel Cay Hotel" price="365" stars="3.2" />
      </div>
    </>
  );
};

export default App;