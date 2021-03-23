import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import Message from './Message';
import { useAuthState } from 'react-firebase-hooks/auth';
const Container = styled.div`
  width: calc(100vw - 15rem);
  margin: 1rem 1rem 1rem 1rem;
  overflow-y: 60px;
  height: 2.5rem;
  border-bottom: 1px solid lightgray;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  height: 2.5rem;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  height: 2.5rem;
`;

const ChatMessages = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 200px);
`;
const ChatBottom = styled.div``;
const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );
  const [loginUser] = useAuthState(auth);
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, roomMessages]);
  return (
    <Container>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlined />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const {
                message,
                timestamp,
                user,
                userId,
                userImage,
              } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                  clearButton={loginUser?.uid === userId}
                  channelId={roomId}
                  massageId={doc.id}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </Container>
  );
};

Chat.propTypes = {};

export default Chat;
