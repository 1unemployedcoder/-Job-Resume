import React from 'react';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translateY(0px); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0px); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0px); }
`;

const ShakeThumbDown = styled.div`
  display: inline-block;
  animation: ${shake} 1s ease infinite;
`;

const ThumbDown = () => (
    <ShakeThumbDown>&#128071;</ShakeThumbDown>
);

export default ThumbDown;