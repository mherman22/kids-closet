import * as React from 'react';
import styled from 'styled-components';

export interface AnnouncementProps {
  children: React.ReactNode
}

const Container = styled.div`
    height: 60px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    background-color: #f34e0c;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Announcement: React.FunctionComponent<AnnouncementProps> = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default Announcement;
