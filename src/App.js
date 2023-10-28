import './App.css';
import Apropos from './Components/apropos/Apropos';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Navigation from './Components/navigation/Navigation';
import Poject from './Components/project/Poject';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Apropos/>
      <Poject/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
