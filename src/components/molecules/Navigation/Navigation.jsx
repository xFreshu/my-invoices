import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdNightlightRound } from 'react-icons/md';
import { NavigationBar } from './Navigation.styles';
import { StyledLogo } from '../../atoms/Logo/Logo.styles';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavigationBar>
      <ul>
        <li>
          <StyledLogo onClick={() => navigate('/')} />
        </li>
        <li>
          <MdNightlightRound />
        </li>
        <li>
          <img src="https://picsum.photos/64/64" alt="random photo api" />
        </li>
      </ul>
    </NavigationBar>
  );
};

export default Navigation;
