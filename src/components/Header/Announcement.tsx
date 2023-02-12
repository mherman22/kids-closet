import * as React from 'react';
import styled from 'styled-components';

export interface AnnouncementProps {
  children: React.ReactNode
}

const Container = styled.div`
  height: 30px;
  background-color: orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
`
const Announcement: React.FunctionComponent<AnnouncementProps> = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default Announcement;
