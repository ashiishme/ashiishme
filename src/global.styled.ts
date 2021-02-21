import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  margin: 0;
  font-family: ${(props) => props.theme.font.family.karla}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
}
`;
