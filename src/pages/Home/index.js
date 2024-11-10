import { useState } from "react";
import Header from "../../component/Header";
import ItemList from "../../component/List";

import {
  Arroba,
  ButaoDeBusca,
  Descrição,
  DivContent,
  HomeBackGround,
  HomeContent,
  Input,
  Nome,
  Perfil,
  ProfileImage,
  ProfileInfo,
  RepoDiv,
  Title,
} from "./Styles";

const App = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();


    console.log(newUser);

    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser;

      setCurrentUser({ avatar_url, name, login, bio });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }

      console.log(newRepos)
    }

    
  };

  return (
    <>
      <Header />
      <HomeContent>
        <HomeBackGround src="./logo.webp" alt="img" />
        <DivContent>
          <div style={{ display: "flex" }}>
            <Input
              name="usuario"
              placeholder="Escreva o nome do usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <ButaoDeBusca onClick={handleGetData}>Buscar</ButaoDeBusca>
          </div>
          {currentUser?.name ? (
            <>
              <ProfileInfo>
                <ProfileImage src={currentUser.avatar_url} />
                <Perfil>
                  <Nome>{currentUser.name}</Nome>
                  <Arroba>@ {currentUser.login}</Arroba>
                  <Descrição>{currentUser.bio}</Descrição>
                </Perfil>
              </ProfileInfo>
              <hr style={{ width: "90%" }} />
            </>
          ) : null}

          
            {repos ? (
              
              <RepoDiv>
                <Title>Repositorios</Title>
                {repos.map (repo => (
                  <a style={{textDecoration: 'none'}} href={repo.html_url} target="_blank" rel="noreferrer" >
                    <ItemList title={repo.name} description={repo.description} language={repo.language} />
                  </a>

                ))}
            
              </RepoDiv>
            ) : null}

        </DivContent>
      </HomeContent>
    </>
  );
};

export default App;
