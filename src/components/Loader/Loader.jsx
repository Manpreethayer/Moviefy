import React from 'react';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import { colors } from '../../utils/Colors';

// Define the keyframes for the jumping animation
const jumpingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Define the keyframes for the dot animation
const dotAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled component for the jumping loader
const JumpingLoader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

// Styled component for individual jumping letters
const JumpingLetter = styled('span')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  animation: `${jumpingAnimation} 1.5s infinite`,
  animationTimingFunction: 'ease-in-out',
  marginLeft: '8px',
  color:`${colors.primaryColor}`
   // Adjust the spacing between letters if needed
}));

// Styled component for the dot animation
const Dot = styled('span')(({ theme }) => ({
  display: 'inline-block',
  animation: `${dotAnimation} 1.5s infinite`,
  animationTimingFunction: 'ease-in-out',
}));

const Loader = () => {
  return (
    <JumpingLoader>
      {Array.from('Moviefy').map((letter, index) => (
        <JumpingLetter key={index}>
          {letter === 'i' ? <Dot>.</Dot> : letter}
        </JumpingLetter>
      ))}
    </JumpingLoader>
  );
};

export default Loader;
