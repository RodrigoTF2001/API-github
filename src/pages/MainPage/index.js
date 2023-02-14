import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';

import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Center, Image, Container, Title, Input, Space } from '@mantine/core';

import githublogo from '../../assests/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  // eslint-disable-next-line no-console
  console.log(login);
  return (
    <Container>
      <Space h={60} />
      <Center>
        <Title order={1}>API github</Title>
      </Center>
      <Space h={25} />
      <Center>
        <Image width={190} src={githublogo} alt="sdaszdsa" />
      </Center>
      <Space h={30} />
      <Center>
        <Input
          placeholder="user"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Link to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Link>
      </Center>
    </Container>
  );
};

export default MainPage;
