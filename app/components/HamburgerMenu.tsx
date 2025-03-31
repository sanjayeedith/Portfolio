import React from 'react';
import styled from 'styled-components';

const HamburgerMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <StyledWrapper>
      <div>
        <input 
          id="checkbox" 
          type="checkbox" 
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars" />
          <div id="bar2" className="bars" />
          <div id="bar3" className="bars" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: .3s;
  }

  .bars {
    width: 100%;
    height: 3px;
    background-color: rgb(253, 255, 243);
    border-radius: 5px;
    transition-duration: .3s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: translateY(10px) rotate(60deg);
    margin-left: 0;
    transform-origin: right;
    transition-duration: .3s;
    z-index: 2;
  }

  #checkbox:checked + .toggle #bar1 {
    transform: translateY(20px) rotate(-60deg);
    transition-duration: .3s;
    transform-origin: left;
    z-index: 1;
  }

  #checkbox:checked + .toggle {
    transform: rotate(-90deg);
  }
`;

export default HamburgerMenu; 