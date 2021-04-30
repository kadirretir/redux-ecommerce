import React, { useEffect } from 'react'
import { SideNav, H1, FilterButtons, Input, Label, InputWrapper } from './AsideMenuElements';
import { useSelector, useDispatch } from 'react-redux';
import { screenResize } from '../../actions';

const AsideMenu = () => {
    const changeHamburger = useSelector(state => state.changeHamburger);
    const dispatch = useDispatch();

    useEffect(() => {
        const disPatchFunc = () => {
            dispatch(screenResize(window.innerWidth));
        }

        const eventListenerFunction = () => {
            // IF Window width is smaller than 768 then remove the listener if not;
            // Apply the dispatch function on resize event
            // This way, the aside menu won't close up on every resize event in case of lower than 768 width
            if (window.innerWidth <= 768) {
                window.removeEventListener("resize", disPatchFunc)
            } else {
                window.addEventListener('resize', disPatchFunc);
            }
        }

        // APPLY DISPATCH ON LOAD
        window.addEventListener("load", disPatchFunc);
        // APPLY CONDITIONAL LISTENER ONLOAD EVENT
        window.addEventListener("load", eventListenerFunction);
        // APPLY CONDITIONAL LISTENER ON RESIZE EVENT
        window.addEventListener("resize", eventListenerFunction);

    }, [dispatch])

    return (
        <div>
            <SideNav showMenu={changeHamburger}>
                <H1>Ekran Kartı</H1>

                <FilterButtons>
                    <InputWrapper>
                        <Input type="radio" id="asus" name="brand" value="asus" />
                        <Label htmlFor="asus">ASUS</Label>
                    </InputWrapper>
                    <InputWrapper>
                        <Input type="radio" id="msi" name="brand" value="msi" />
                        <Label htmlFor="msi">MSI</Label>
                    </InputWrapper>
                </FilterButtons>
            </SideNav>
        </div>
    )
}

export default AsideMenu
