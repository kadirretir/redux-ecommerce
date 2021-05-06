import styled from 'styled-components';

export const SideNav = styled.div`
    height: 100%; 
    width: 50%;
    position: fixed; 
    z-index: 151; 
    top: ${props => props.sendHeight ? "0" : "5rem"};
    left: ${props => props.showMenu ? "0" : "-50%"};
    background-color: var(--secondary-color); 
    overflow-x: hidden; 
    padding-top: 60px; 
    transition: 0.5s; 
    grid-area: aside;
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

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #eee;
  border-radius: 50%;
`

export const H1 = styled.h1`
text-align: center;
color: var(--fourth-color);
font-size: 2.5rem;
`

export const Input = styled.input`
 position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.7rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  left: 10%;
  top: 2rem;
  &:hover input ~ span {
    background-color: #ccc;
  }

  & input:checked ~ span {
    background-color: var(--fourth-color);
  }

  & input:checked ~ span:after {
      display: block;
  }

  & span:after {
    top: 9px;
	left: 9px;
	width: 9px;
	height: 8px;
	border-radius: 50%;
	background: white;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    left: 25%;
    top: 2rem;
    font-size: 2rem;
  }
`