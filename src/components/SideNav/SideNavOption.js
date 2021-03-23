import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import { enterRoom } from '../../features/appSlice';

const Container = styled.div`
  height: 3em;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > .MuiSvgIcon-root {
    margin-right: 5px;
  }
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }
`;
const SidebarOptionChannel = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 7px;
    margin-right: 10px;
  }
`;
const SideNavOption = ({ Icon, text, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = useCallback(() => {
    const channelName = prompt('Please enter the channel name');
    if (channelName) {
      db.collection('rooms').add({ name: channelName });
    }
  }, []);
  const selectChannel = useCallback(() => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  }, []);
  return (
    <Container onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon ? (
        <>
          <Icon fontSize="small" />
          <h3>{text}</h3>
        </>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          <h3>{text}</h3>
        </SidebarOptionChannel>
      )}
    </Container>
  );
};

SideNavOption.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  addChanenelOption: PropTypes.bool,
};

export default SideNavOption;
