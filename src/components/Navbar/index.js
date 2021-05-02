import React from 'react';
import {
    Nav,
    NavContainer,
    NavList,
    NavRight,
    Span,
    ShoppingWrapper,
    NavLinks,
    Logo,
    ShoppingLink,
    Hamburger,
    ShoppingList,
    H3,
    CardImg,
    ImgWrapper,
    CardContainer,
    Card,
    CardMiddle,
    CardRight,
    ProductInfo,
    Button,
    Price
} from './NavbarElements';
import {MdRemoveShoppingCart} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import { hamburgerAction } from '../../actions';
import {sepettenCikar} from '../../actions';

const Navbar = () => {
    const inCart = useSelector(state => state.inCart);
    const changeHamburger = useSelector(state => state.changeHamburger);
    const dispatch = useDispatch();

    function ShopList() {
        if (inCart.length > 0) {
            return (
                <CardContainer>
                    <ProductOnBasketH3 />
                    <ProductinBasket />
                </CardContainer>
            )
        } else {
            return <BasketEmpty />
        }
    }

    function BasketEmpty() {
        return <H3>Sepetiniz Boş</H3>
    }

    function ProductOnBasketH3() {
        return <H3 isProductIn={(inCart.length > 0)}>Sepettekiler</H3>;
    }
    
    function ProductinBasket() {
        return inCart.map(inCartItem => {
            return (
                <React.Fragment key={inCartItem.id}>
                    <Card>
                        <ImgWrapper>
                            <CardImg src={inCartItem.poster_image} alt={inCartItem.title} />
                        </ImgWrapper>
                        <CardMiddle>
                            <ProductInfo><b>{inCartItem.title}</b></ProductInfo>
                            <ProductInfo><b>Miktar: </b> {inCartItem.quantity} Adet</ProductInfo>
                        </CardMiddle>
                        <CardRight>
                        <Button onClick={() => dispatch(sepettenCikar(inCartItem))}><MdRemoveShoppingCart/></Button>
                            <Price>₺{inCartItem.price}</Price>
                        </CardRight>
                    </Card>
                </React.Fragment >
            );
        })
    }

return (
    <Nav>
        <NavContainer>
            <Hamburger onClick={() => dispatch(hamburgerAction())} className={changeHamburger ? "change" : null}>
                <Span className="bar1"></Span>
                <Span className="bar2"></Span>
                <Span className="bar3"></Span>
            </Hamburger>
            <Logo to="/">
                ReduxShopping
                </Logo>
            <NavRight>
                <ShoppingWrapper className="showShoppingList" data-attr={inCart.length}>
                    <ShoppingLink to="/mycard">
                        <FiShoppingCart style={{ fontSize: "2.7rem", color: "var(--secondary-color)" }} />
                    </ShoppingLink>
                    <ShoppingList isProductIn={(inCart.length > 0)} className="shoppingList">
                        <ShopList />
                    </ShoppingList>
                </ShoppingWrapper>
                <NavList>
                    <NavLinks to="/">Anasayfa</NavLinks>
                    <NavLinks to="/sepet">Sepetim</NavLinks>
                    <NavLinks to="/urunler">Ürünler</NavLinks>
                </NavList>
            </NavRight>
        </NavContainer>
    </Nav>
)
}



export default Navbar
