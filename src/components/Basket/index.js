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
} from './BasketElements';

import { MdRemoveShoppingCart } from 'react-icons/md';
import { sepettenCikar } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';


const Basket = () => {
    const inCart = useSelector(state => state.inCart);
    const dispatch = useDispatch();

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
                            <ProductInfo><b>Miktar: </b> {inCartItem.quantity} Adet</ProductInfo>
                        </CardMiddle>
                        <CardRight>
                            <Button onClick={() => dispatch(sepettenCikar(inCartItem))} ><MdRemoveShoppingCart /></Button>
                            <Price>₺{inCartItem.price}</Price>
                        </CardRight>
                    </InCart>
                );
            })
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

                    <Order>
                        
                    </Order>
                </ProductInCart>
            </BasketContainer>
        </BasketSection>
    )
}

export default Basket
