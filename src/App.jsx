import React from "react";
import SearchBar from "./components/SearchBar";
import ProfileInfo from "./components/ProfileInfo";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import useGithubApi from "./hooks/useGithubApi"; // Importando o hook

function App() {
  const { profileData, errorMessage, loading, fetchProfile } = useGithubApi();

  const handleSearch = (usernameToSearch) => {
    fetchProfile(usernameToSearch);
  };

  return (
    <div className="App">
      <h1>Busca de Perfil no GitHub</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && <div className="loading-spinner">Carregando...</div>}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {profileData && <ProfileInfo profile={profileData} />}
    </div>
  );
}

export default App;
