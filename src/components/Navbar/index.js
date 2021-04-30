import React from 'react';
import { Nav, NavContainer, NavList, NavRight, Span, ShoppingWrapper, NavLinks, Logo, ShoppingLink, Hamburger } from './NavbarElements';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import {hamburgerAction} from '../../actions';

const Navbar = () => {
    const inCart = useSelector(state => state.inCart);
    const changeHamburger = useSelector(state => state.changeHamburger);
    const dispatch = useDispatch();

  
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
                    <ShoppingWrapper data-attr={inCart.length}>
                        <ShoppingLink to="/mycard">
                            <FiShoppingCart style={{ fontSize: "2.7rem", color: "var(--secondary-color)" }} />
                        </ShoppingLink>
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
