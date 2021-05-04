import styled from 'styled-components';

export const BasketSection = styled.section`
width: 100%;

padding: 1rem 0;
`

export const BasketContainer = styled.div`
width: 90%;
margin: 0 auto;

@media screen and (max-width: 768px) {
width: 95%;
}
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
                      'incart order';
grid-template-columns: 1fr 1fr;
margin: 5rem 0;
@media screen and (max-width: 768px) {
    grid-template-areas: 'incart'
                          'order';
grid-template-columns: 1fr; 
grid-row-gap: 5rem;

}
`

export const Cards = styled.div`
grid-area: incart;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`

export const InCart = styled.div`
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
@media screen and (max-width: 768px) {
    grid-template-columns: 45% 35% 20%;
    height: 16rem;
    grid-template-rows: 16rem;
}

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
font-size: 2.3rem;
color: var(--fourth-color);
background: none;
border: none;
cursor: pointer;
margin: 0 0.5rem;
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

export const CardMiddleSymbols = styled.div`

`

export const ProductInfo = styled.span`
font-size: 1.2rem;
`


export const Order = styled.div`
grid-area: order;
width: 75%;
border-radius: 1rem;
margin: 0 auto;
border: 0.1rem solid #F2F2F2;
height: 30rem;
background: #FAFAFA;

@media screen and (max-width: 768px) {
width: 95%;
}
`

export const OrderContainer = styled.div`
width: 90%;
margin: 0 auto;
padding: 1rem;
`


export const H2 = styled.h2`
color: var(--third-color);
text-align: center;
font-size: 1.8rem;
`

export const OrderContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
margin-top: 5rem;
grid-row-gap: 2rem;

`

export const Span = styled.span`
font-size: 1.6rem;
`

export const B = styled.b`
font-size: 1.5rem;
text-align: right;
`
