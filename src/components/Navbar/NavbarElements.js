import styled from 'styled-components';
import {Link as Links} from 'react-router-dom';


export const Nav = styled.header`
width: 100%;
min-height: 5rem;
background-color: var(--primary-color);
`


export const NavContainer = styled.div`
width: 95%;
margin: 0 auto;
min-height: 5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media screen and (min-width: 768px) {
width: 80%;
}
`

export const Logo = styled(Links)`
display: none;
color: var(--third-color);
font-size: 2.5rem;
font-family: var(--secondary-font);
@media screen and (min-width: 768px) {
    display: block;
    }
`

export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  margin-top: 0.5rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`



export const Span = styled.div`
  width: 36px;
  height: 5px;
  background-color: var(--third-color);
  margin: 0.5rem 0;
  transition: 0.4s;
  z-index: 150;
`




export const NavList = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const NavRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

export const ShoppingLink = styled(Links)`

`


export const ShoppingWrapper = styled.div`
position: relative;
&::after {
    content: attr(data-attr);
    text-align: center;
    color: var(--primary-color);
    position: absolute;
    top: 0;
    right: -0.5rem;
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    background-color: var(--third-color);
    border-radius: 50%;
}
`


export const NavLinks = styled(Links)`
font-size: 1.8rem;
margin-left: 1rem;
font-family: var(--secondary-font);
color: var(--fourth-color);

`


