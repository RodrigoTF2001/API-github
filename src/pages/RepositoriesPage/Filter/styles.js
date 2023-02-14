import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  border: none;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  transition: background 0.3s,transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected{
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
  }
`
export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: center;
  padding: 1rem;

  &:hover,
  &.selected{
    color: grey;
  }
`

export const Return = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: center;
  padding: 1rem;

  &:hover,
  &.selected{
    color: grey;
  }
`

