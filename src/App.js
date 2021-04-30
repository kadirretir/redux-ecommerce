import './App.css';
import Navbar from './components/Navbar';
import AsideMenu from './components/AsideMenu';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AsideMenu/>
      </Router>
    </>
  );
}

export default App;
