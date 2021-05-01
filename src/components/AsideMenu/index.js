import React, { useEffect, useState } from 'react'
import { SideNav, H1, FilterButtons, Input, Label, Span } from './AsideMenuElements';
import { useSelector, useDispatch } from 'react-redux';
import { screenResize } from '../../actions';

const AsideMenu = () => {
    const changeHamburger = useSelector(state => state.changeHamburger);
    const dispatch = useDispatch();
    const [fullHeight, setFullHeight] = useState();

    const changeAsideHeight = () => {
        if(window.pageYOffset > 25) {
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

    }, [dispatch, fullHeight])

    return (
        <div>
            <SideNav sendHeight={fullHeight} showMenu={changeHamburger}>
                <H1>Ekran Kartları</H1>

                <FilterButtons>
                   
                    <Label htmlFor="asus">ASUS
                        <Input type="radio" id="asus" name="brand" value="asus" />
                        <Span className="checkmark"></Span>
                        </Label>
                    
                    
                    <Label htmlFor="msi">MSI
                        <Input type="radio" id="msi" name="brand" value="msi" />
                        <Span className="checkmark"></Span>
                        </Label>
                  
                </FilterButtons>
            </SideNav>
        </div>
    )
}

export default AsideMenu