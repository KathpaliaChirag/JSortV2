import './App.css';
import Header from './components/Header';
import Base from './components/Base';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header />
          <Base />
          {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
