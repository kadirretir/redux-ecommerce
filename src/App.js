import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AsideMenu from './components/AsideMenu';
import Hero from './components/Hero';
import Products from './components/Products';
import styled from 'styled-components';

const RootDiv = styled.div`
    display: grid;
    grid-template-areas: 'header header'
                          'aside contentsection'
                          'aside productsection';
    grid-template-columns: 0 100%;
    height: auto;

    @media screen and (min-width: 768px) {
        grid-template-columns: 30% 70%;
   }

   @media screen and (min-width: 1200px) {
        grid-template-columns: 20% 80%; 
   }
`

function App() {
  return (
    <>
      <RootDiv >
        <Router>
          <Navbar />
          <AsideMenu />
          <Hero style={{transition: "width 2s"}} />
          <Products />
        </Router>
      </RootDiv>
    </>
  );
}

export default App;
