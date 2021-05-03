import './App.css';
import './Button.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AsideMenu from './components/AsideMenu';
import Hero from './components/Hero';
import Products from './components/Products';
import styled from 'styled-components';
import Basket from './components/Basket';

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
          <Route path="/" exact render={() => {
            return (
              <>
                <Hero />
                <Products />
              </>
            )
          }}
          />

          <Route path="/sepet" exact render={() => {
            return (
              <>
                <Basket />
              </>
            )
          }}
          />



        </Router>
      </RootDiv>
    </>
  );
}

export default App;
