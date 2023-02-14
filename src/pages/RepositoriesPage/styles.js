import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 8rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  max-height: 500vh;
  overflow-y: hidden;
  padding: 40px;
`;
