import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
export const Container = styled.header`
  height: 3.5rem;
  width: 100%;
  display: flex;
  background-color: var(--slack-color);
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const HeaderLeft = styled.div`
  height: 3rem;
  flex: 0.25;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSearch = styled.form`
  height: 1.8rem;
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  border: 1px solid grey;
  opacity: 1;
  border-radius: 0.3rem;
  input {
    width: calc(100% - 3rem);
    display: block;
    height: 2rem;
    background-color: transparent;
    border: none;
    text-align: center;
    color: grey;
    min-width: 30vw;
    &:focus {
      outline: none;
    }
  }
`;
export const HeaderRight = styled.div`
  height: 3rem;
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 1.5rem;
  }
`;
export const HeaderAvatar = styled(Avatar)`
  margin-left: 1rem;
`;
export const Button = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  background-color: transparent;
  color: grey;
  margin-right: 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
`;
