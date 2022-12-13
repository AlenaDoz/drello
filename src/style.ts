import styled, { createGlobalStyle } from 'styled-components';
import { styleVars } from './constants/constants';
import { fonts } from './constants/constants';

const AppBlock = styled.div`
  flex: 1 0 auto;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    ${styleVars.blue} 99%
  );
`;
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: '${fonts.raleway}';
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
export { AppBlock, GlobalStyle };
