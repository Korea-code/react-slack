import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--slack-color);
  width: 15rem;
  border-top: 1px solid var(--border-color);
  color: white;

  > hr {
    margin: 10px 0;
    border: 1px solid var(--border-color);
  }
`;
export const SidebarHeader = styled.nav`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding: 0.7rem;
  > .MuiSvgIcon-root {
    padding: 3px;
    font-size: 1.5rem;
    color: var(--border-color);
    border-radius: 999px;
    background-color: white;
  }
`;
export const SidebarInfo = styled.nav`
  flex: 1;
  > h2 {
    margin-bottom: 5px;
    font-weight: 900;
    font-size: 1.4rem;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
