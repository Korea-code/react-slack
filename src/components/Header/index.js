import React from 'react';
import {
  Container,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
  Button,
} from './styles';
import {
  AccessTime,
  Search,
  ArrowForward,
  HelpOutline,
} from '@material-ui/icons';

import useInput from '../../hooks/useInput';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const search = useInput();
  const [user, loading] = useAuthState(auth);
  return (
    <Container>
      <HeaderLeft>
        {!loading && (
          <HeaderAvatar
            onClick={() => auth.signOut()}
            src={user?.photoURL}
            alt={user?.displayName}
          />
        )}
        <AccessTime color="inherit" />
      </HeaderLeft>
      <HeaderSearch>
        <Search style={{ marginLeft: '0.4rem' }} />
        <input
          value={search.value}
          onChange={search.onChange}
          type="text"
          placeholder="Search"
        />
        <Button type="submit">
          <ArrowForward color="inherit" />
        </Button>
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
