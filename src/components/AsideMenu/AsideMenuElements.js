import styled from 'styled-components';

export const SideNav = styled.div`
    height: 94%; 
    width: 50%;
    position: absolute; 
    z-index: 1; 
    top: 5rem;
    left: ${props => props.showMenu ? "0" : "-50%"};
    background-color: var(--secondary-color); 
    overflow-x: hidden; 
    padding-top: 60px; 
    transition: 0.5s; 

    @media screen and (min-width: 768px) {
     left: ${props => props.showMenu ? "0" : "-50%"};
     width: ${props => props.showMenu ? "30%" : "-50%"};
    }

    @media screen and (min-width: 1200px) {
     width: ${props => props.showMenu ? "20%" : "-50%"};
    }

`

export const FilterButtons = styled.div`
display: flex;
flex-direction: column;
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

export const H1 = styled.h1`
text-align: center;
`

export const Input = styled.input`

`

export const Label = styled.label`

`