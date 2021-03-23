import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { auth, provider } from '../firebase';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 600px;
  max-width: 600px;
  width: 50%;
  height: 50%;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
  justify-content: space-around;
  > img {
    width: 300px;
    border-radius: 40px;
  }
`;
const Button = styled.button`
  background-color: green;
  color: white;
  width: 300px;
  height: 30px;
  border-radius: 10px;
`;
const SmallHeader = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
`;
const Login = () => {
  const onSignIn = useCallback((e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error));
  }, []);
  return (
    <Container>
      <InnerContainer>
        <img
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xhY2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="slack-logo"
        />
        <SmallHeader>
          <h1>Sign in to Slack</h1>
          <p>www.slack.com</p>
        </SmallHeader>
        <Button type="submit" onClick={onSignIn}>
          Sign in with Google
        </Button>
      </InnerContainer>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
