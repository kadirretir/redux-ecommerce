import styled from 'styled-components';

export const BasketSection = styled.section`
width: 100%;
min-height: 30vh;
padding: 1rem 0;
`

export const BasketContainer = styled.div`
width: 90%;
margin: 0 auto;
`

export const H1 = styled.h1`
font-size: 2.3rem;
color: var(--fourth-color);
width: 100%;
border-bottom: 0.2rem solid var(--primary-color);
`

export const ProductInCart = styled.div`
display: grid;
grid-template-areas: 'incart order'
                      '. order';
grid-template-columns: 1fr 1fr;
grid-auto-rows: min-content;
min-height: 45vh;
margin: 2rem 0;

@media screen and (max-width: 768px) {
    grid-template-areas: 'incart'
                          'order';
grid-template-columns: 1fr; 
}
`

export const Cards = styled.div`

`

export const InCart = styled.div`
grid-area: incart;
margin: 1rem 0;
width: 100%;
background: #fff;
height: 13rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 7px;
border-radius: 0.5rem;
display: grid;
grid-template-areas: 'img info price';
grid-template-columns: 50% 40% 10%;
grid-template-rows: 13rem;
`

export const ImgWrapper = styled.div`
    height: 100%;
     width: 100%;      
`

export const CardImg = styled.img`
   max-width: 100%;
   max-height: 100%;
   display: block;
`

export const CardMiddle = styled.div`
grid-area: info;
display: flex;
flex-direction: column;
justify-content: space-around;

`

export const CardRight = styled.div`
grid-area: price;
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
`


export const Order = styled.div`
grid-area: order;
`