import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import AppBody from './layouts/AppBody';
import SideNav from './components/SideNav';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';
const AppLoading = styled.div`
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
  justify-content: center;
  > img {
    width: 300px;
    border-radius: 40px;
    margin-bottom: 60px;
  }
`;
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <InnerContainer>
          <img
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xhY2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt="slack-logo"
          />
          <Spinner name="ball-spin-fade-loader" />
        </InnerContainer>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <header className="App-header">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <AppBody>
                <SideNav />
                <Chat />
                <Switch>
                  <Route path="/"></Route>
                </Switch>
              </AppBody>
            </>
          )}
        </Router>
      </header>
    </div>
  );
}

export default App;
