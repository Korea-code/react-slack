import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Clear } from '@material-ui/icons';
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
const Container = styled.div`
  height: 50px;
  overflow: hidden;
  img {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: 10px;
  }
`;
const MessageInfo = styled.div``;
const Username = styled.span`
  height: 50%;
  font-weight: 700;
  margin-right: 5px;
`;
const Text = styled.div`
  height: 50%;
`;
const Time = styled.span`
  font-size: 0.8em;
  color: grey;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Clear_ = styled(Clear)`
  border: 2px solid grey;
  border-radius: 999px;
  color: grey;
`;
const Message = ({
  message,
  timestamp,
  user,
  userImage,
  clearButton,
  channelId,
  massageId,
}) => {
  const handleRemove = useCallback(() => {
    console.log(channelId);
    console.log(
      db
        .collection('rooms')
        .doc(channelId)
        .collection('messages')
        .doc(massageId)
    );
  }, [channelId, massageId]);
  return (
    <Container>
      <img src={userImage} alt="user" />
      <MessageInfo>
        <Username>{user}</Username>
        <Time>{new Date(timestamp?.toDate()).toLocaleString()}</Time>
      </MessageInfo>
      <TextContainer>
        <Text>{message}</Text>
        {clearButton && <Clear_ onClick={handleRemove} />}
      </TextContainer>
    </Container>
  );
};

Message.propTypes = {};

export default Message;
