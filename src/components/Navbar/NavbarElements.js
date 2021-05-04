import styled from 'styled-components';
import { Link as Links } from 'react-router-dom';


export const Nav = styled.header`
width: 100%;
min-height: 5rem;
background-color: var(--primary-color);
grid-area: header;
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
export const ShoppingLink = styled(Links)`

`

export const ShoppingList = styled.div`
${props => props.isProductIn ? `
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
` : `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`}

`

export const CardContainer = styled.div`
padding: 3rem 0;
width: 90%;
margin: 0 auto;
`

export const Card = styled.div`
margin: 1rem 0;
width: 100%;
max-height: 14rem;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 7px;
border-radius: 0.5rem;
display: grid;
grid-template-areas: 'img info price';
grid-template-columns: 50% 40% 10%;
@media screen and (max-width: 768px) {
  grid-template-columns: 40% 40% 20%;
}
`



export const ImgWrapper = styled.div`
     width: 100%;      
      height: 60%;
`

export const CardImg = styled.img`
   max-width: 100%;
   max-height: 100%;
   display: block;
`

export const CardMiddle = styled.div`
grid-area: info;
height: 65%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
`

export const CardRight = styled.div`
grid-area: price;
height: 65%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

`

export const Button = styled.button`
font-size: 2rem;
color: var(--fourth-color);
background: none;
border: none;
cursor: pointer;
`

export const Price = styled.b`
font-size: 1.2rem;
`


export const H3 = styled.h3`
text-align: center;
font-size: 2rem;
color: var(--third-color);
margin-bottom: ${props => props.isProductIn ? "3rem" : "0"};
`

export const ProductInfo = styled.span`
font-size: 1.2rem;
@media screen and (max-width: 768px) {
  font-size: 1.1rem;
}
`


export const NavLinks = styled(Links)`
font-size: 1.8rem;
margin-left: 1rem;
font-family: var(--secondary-font);
color: var(--fourth-color);

`


