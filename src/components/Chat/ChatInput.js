import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { auth, db } from '../../firebase';
import firebase from 'firebase';
import useInput from '../../hooks/useInput';
import { useAuthState } from 'react-firebase-hooks/auth';
const Conatiner = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
const ChatInput = ({ channelName, channelId }) => {
  const input = useInput();
  const [user] = useAuthState(auth);
  const sendMessage = useCallback(
    (e) => {
      e.preventDefault();
      console.log('ch: ', channelId);
      if (!channelId || input.value === '') {
        return false;
      }
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userId: user?.uid,
        userImage: user?.photoURL,
      });
      input.setValue('');
    },
    [channelId, input.value]
  );
  return (
    <Conatiner>
      <form onSubmit={sendMessage}>
        <input
          onChange={input.onChange}
          value={input.value}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit">
          SEND
        </Button>
      </form>
    </Conatiner>
  );
};

ChatInput.propTypes = {};

export default ChatInput;
