import React, { useEffect, useState } from 'react'
import { SideNav, H1, FilterButtons, Input, Label, Span } from './AsideMenuElements';
import { useSelector, useDispatch } from 'react-redux';
import { screenResize, getFilteredbyRadio } from '../../actions';

const AsideMenu = () => {
    const changeHamburger = useSelector(state => state.changeHamburger);
    const radioInItem = useSelector(state => state.radioInItem);
    const dispatch = useDispatch();
    const [fullHeight, setFullHeight] = useState();

    const changeAsideHeight = () => {
        if (window.pageYOffset > 25) {
            setFullHeight(true);
        } else {
            setFullHeight(false);
        }
    }

    useEffect(() => {
        const disPatchFunc = () => {
            dispatch(screenResize(window.innerWidth));
        }

        window.addEventListener("resize", disPatchFunc);
        window.addEventListener("load", disPatchFunc);

        // APPLY IF SCROLL FROM TOP
        window.addEventListener("scroll", changeAsideHeight)

    }, [dispatch, fullHeight]);

    const handleChange = (e) => {
        dispatch(getFilteredbyRadio(e.target.name));
    }

    return (
        <div>
            <SideNav sendHeight={fullHeight} showMenu={changeHamburger}>
                <H1>Ekran Kartları</H1>

                <FilterButtons>

                    <Label htmlFor="asus">ASUS
                        <Input
                            checked={radioInItem === "asus"}
                            onChange={handleChange}
                            type="radio"
                            id="asus"
                            name="asus"
                            value="asus" />
                        <Span className="checkmark"></Span>
                    </Label>


                    <Label htmlFor="msi">MSI
                        <Input
                            checked={radioInItem === "msi"}
                            onChange={handleChange}
                            type="radio"
                            id="msi"
                            name="msi"
                            value="msi" />
                        <Span className="checkmark"></Span>
                    </Label>

                </FilterButtons>
            </SideNav>
        </div>
    )
}

export default AsideMenu