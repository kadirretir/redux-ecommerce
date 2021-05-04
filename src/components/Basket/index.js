import React from 'react'
import {
    BasketSection,
    BasketContainer,
    H1,
    ProductInCart,
    InCart,
    Order,
    ImgWrapper,
    CardImg,
    CardMiddle,
    CardRight,
    ProductInfo,
    Button,
    Price,
    Cards,
    CardMiddleSymbols,
    OrderContainer,
    H2,
    OrderContent,
    Span,
    B
} from './BasketElements';

import { MdRemoveShoppingCart } from 'react-icons/md';
import { sepettenCikar, decrease, addcart } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';


const Basket = () => {
    const inCart = useSelector(state => state.inCart);
    const dispatch = useDispatch();

    const totalPrice = inCart.reduce((total, item) => (total += item.price * item.quantity), 0);
    const totalWithKDV = totalPrice + (totalPrice * 0.25 / 100);
    const totalWithRegular = Math.floor(totalWithKDV * 100) / 100;

    function CartInProductHeader() {
        if (inCart.length > 0) {
            return <H1>Sepette {inCart.length} Ürün</H1>;
        } else {
            return <H1>Sepette Ürün Yok</H1>
        }
    }

    function ProductinBasket() {
        if (inCart.length > 0) {
            return inCart.map(inCartItem => {
                return (
                    <InCart key={inCartItem.id}>
                        <ImgWrapper>
                            <CardImg src={inCartItem.poster_image} alt={inCartItem.title} />
                        </ImgWrapper>
                        <CardMiddle>
                            <ProductInfo><b>{inCartItem.title}</b></ProductInfo>
                            <CardMiddleSymbols>
                                <Button onClick={() => dispatch(addcart(inCartItem))}>+</Button>
                                <Button onClick={() => dispatch(decrease(inCartItem))}>-</Button>
                            </CardMiddleSymbols>
                            <ProductInfo><b>Miktar: </b> {inCartItem.quantity} Adet</ProductInfo>
                        </CardMiddle>
                        <CardRight>
                            <Button onClick={() => dispatch(sepettenCikar(inCartItem))} ><MdRemoveShoppingCart /></Button>
                            <Price>₺{(inCartItem.price * inCartItem.quantity).toFixed(0)}</Price>
                        </CardRight>
                    </InCart>
                );
            })
        } else {
            return "";
        }
    }

    function ProductInOrder() {
        if (inCart.length > 0) {
            return (
                <Order>
                    <OrderContainer>
                        <H2>Sipariş Özetiniz</H2>
                        <OrderContent>
                            <Span>Sepet Toplamı: </Span> <B>{totalPrice.toFixed(0)} TL</B>
                            <Span>KDV Bedeli Toplamı:</Span>  <B>{totalWithRegular} TL</B>
                            <Span>Toplam Ödenecek Tutar:</Span>  <B>{totalWithRegular} TL</B>
                        </OrderContent>
                    </OrderContainer>
                </Order>
            );
        } else {
            return "";
        }
    }




    return (
        <BasketSection>
            <BasketContainer>
                <CartInProductHeader />

                <ProductInCart>
                    <Cards>
                        <ProductinBasket />
                    </Cards>
                        <ProductInOrder />
                </ProductInCart>
            </BasketContainer>
        </BasketSection>
    )
}

export default Basket
