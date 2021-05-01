import styled from 'styled-components';

export const ProductSection = styled.section`
grid-area: productsection;
`

export const ProductContainer = styled.div`
width: 90%;
margin: 3rem auto 0 auto;
padding: 2rem 0;
display: flex;
`

export const Cards = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
grid-gap: 2rem;

@media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
}
`

export const Card = styled.div`
width: 100%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 0.5rem;
transition: transform 0.2s ease-in-out;
&:hover {
    transform: translate(2px, -2px);
}

@media screen and (min-width: 1200px) {
   width: 90%;
}

`

export const ImgWrapper = styled.div`
    position: relative;
    width: 100%;    
    overflow: hidden;
    background: #3E4756;
    border-radius: 5px 5px 0 0;
    &::after {
        display: block;
        content: "";
        padding-bottom: 56.25%;
    }

`

export const CardImg = styled.img`
    position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     opacity: 0.9; 
     object-fit: cover;
`

export const CardContent = styled.div`
width: 90%;
margin: 1rem auto 1rem auto;
min-height: 20rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export const H2 = styled.h2`
`

export const MiddleGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 75% 25%;
grid-template-areas: 'gridleft price';
`

export const MiddleLeft = styled.div`
grid-area: gridleft;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
`

export const Span = styled.span`
font-size: 1.4rem;
`

export const H3 = styled.h3`
grid-area: price;
text-align: right;
font-size: 1.6rem;
`

export const Button = styled.button`
width: 11rem;
height: 3.5rem;
border-radius: 0.5rem;
outline: none;
border: none;
cursor: pointer;
background-color: var(--fourth-color);
color: var(--primary-color);
transition: all 0.2s ease-in-out;
&:hover {
    color: var(--primary-color);
    background-color: var(--third-color);
}
`