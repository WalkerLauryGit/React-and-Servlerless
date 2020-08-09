import React from 'react';
import {Link} from "react-router-dom"
import {StyledNavbar, StyledNavBrand, StyledNavItems, StyledLinkButton} from '../styled/Navbar'

import {Accent} from '../styled/Random'

const Navbar = () => {
  return (
    <StyledNavbar>
    
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Walker</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li><StyledLinkButton to="/">Home</StyledLinkButton></li>
        <li><StyledLinkButton to="/highScores">High Scores</StyledLinkButton></li>
      </StyledNavItems>
    </StyledNavbar>
  );
}

export default Navbar;
