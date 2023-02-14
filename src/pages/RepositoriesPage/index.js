import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getLangsFrom, getUser, getRepos } from '../../services/api';

import { Sidebar, Main, Container } from './styles';

const RepositoriesPage = () => {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLangsFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  // const user = {
  //   login: "ichiruto",
  //   name: "Rodrigo",
  //   avatar_url: "https://avatars.githubusercontent.com/u/71793817?v=4",
  //   followers: 17,
  //   following: 25,
  //   company: 'nordestek',
  //   location: "Maceió-AL",
  //   urlLink: null
  // }
  // const repositories = [
  //   {id:1,name:"Repo 1",description:'descricao',htmlUrl:"dxczzczd",language:'Javascript'},
  //   {id:2,name:"Repo 2",description:'descricao',htmlUrl:"dxczzczd",language:'PHP'},
  //   {id:3,name:"Repo 3",description:'descricao',htmlUrl:"dxczzczd",language:'Ruby'},
  //   {id:4,name:"Repo 4",description:'descricao',htmlUrl:"dxczzczd",language:'Shell'},
  //   {id:5,name:"Repo 5",description:'descricao',htmlUrl:"dxczzczd",language:'Javascript'},
  //   {id:6,name:"Repo 6",description:'descricao',htmlUrl:"dxczzczd",language:'PHP'}
  // ]
  // const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
