import React from 'react';

import PropTypes from 'prop-types';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Data } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <h1>{user.login}</h1>
      <h2>{user.name}</h2>
    </Header>
    <div>
      <Data>
        <MdGroup size={20} />
        {user.following} following {user.followers} followers
      </Data>
      {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
      )}
      {user.urlLink && (
        <Data>
          <MdLink size={20} />
          zczc
        </Data>
      )}
    </div>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    urlLink: PropTypes.string,
  }).isRequired,
};

export default Profile;
