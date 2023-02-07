import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"


export const Nav = styled.nav`
background: #FFFFFF;
height: 50px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((134vw - 1000px) / 2);
z-index: 12;
`

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #808080;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`
