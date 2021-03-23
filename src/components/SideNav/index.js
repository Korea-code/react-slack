import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../firebase';
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  FileCopy,
  PeopleAlt,
  Apps,
  Add,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';
import { Container, SidebarHeader, SidebarInfo } from './styles';
import SideNavOption from './SideNavOption';
import { useAuthState } from 'react-firebase-hooks/auth';

const SideNav = () => {
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);
  return (
    <Container>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecord />
            {user?.email}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SideNavOption Icon={InsertComment} text="Threads" />
      <SideNavOption Icon={Inbox} text="Mentions & reactions" />
      <SideNavOption Icon={Drafts} text="Saved items" />
      <SideNavOption Icon={BookmarkBorder} text="Channel browser" />
      <SideNavOption Icon={PeopleAlt} text="People & user groups" />
      <SideNavOption Icon={Apps} text="Apps" />
      <SideNavOption Icon={FileCopy} text="File browser" />
      <SideNavOption Icon={ExpandLess} text="Show less" />
      <hr />
      <SideNavOption Icon={ExpandMore} text="Channels" />
      <hr />
      <SideNavOption Icon={Add} addChannelOption text="AddChannel" />
      {channels?.docs.map((doc) => (
        <SideNavOption key={doc.id} id={doc.id} text={doc.data().name} />
      ))}
    </Container>
  );
};

SideNav.propTypes = {};

export default SideNav;
