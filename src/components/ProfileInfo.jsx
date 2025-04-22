import React from "react";

function ProfileInfo({ profile }) {
  if (import.meta.env.DEV) {
    if (typeof profile !== "object" && profile !== null) {
      console.error("Prop 'profile' inválida: esperava um objeto ou null.");
    } else if (profile) {
      if (typeof profile.avatar_url !== "string") {
        console.error(
          "Prop 'profile.avatar_url' inválida: esperava uma string."
        );
      }
      if (profile.name && typeof profile.name !== "string") {
        console.error("Prop 'profile.name' inválida: esperava uma string.");
      }
      if (typeof profile.login !== "string") {
        console.error("Prop 'profile.login' inválida: esperava uma string.");
      }
      if (profile.bio && typeof profile.bio !== "string") {
        console.error("Prop 'profile.bio' inválida: esperava uma string.");
      }
      if (profile.location && typeof profile.location !== "string") {
        console.error("Prop 'profile.location' inválida: esperava uma string.");
      }
      if (
        profile.followers !== undefined &&
        typeof profile.followers !== "number"
      ) {
        console.error("Prop 'profile.followers' inválida: esperava um número.");
      }
      if (
        profile.following !== undefined &&
        typeof profile.following !== "number"
      ) {
        console.error("Prop 'profile.following' inválida: esperava um número.");
      }
      if (
        profile.public_repos !== undefined &&
        typeof profile.public_repos !== "number"
      ) {
        console.error(
          "Prop 'profile.public_repos' inválida: esperava um número."
        );
      }
      if (profile.html_url && typeof profile.html_url !== "string") {
        console.error("Prop 'profile.html_url' inválida: esperava uma string.");
      }
    }
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="profile-info">
      <img
        src={profile.avatar_url}
        alt={`Foto de perfil de ${profile.name || profile.login}`}
        className="profile-image"
      />
      <div className="profile-details">
        <h2>{profile.name || profile.login}</h2>
        <p className="bio">{profile.bio || "Nenhuma bio disponível."}</p>
        {profile.location && (
          <p className="location">Localização: {profile.location}</p>
        )}
        {profile.followers !== undefined && (
          <p className="followers">Seguidores: {profile.followers}</p>
        )}
        {profile.following !== undefined && (
          <p className="following">Seguindo: {profile.following}</p>
        )}
        {profile.public_repos !== undefined && (
          <p className="repos">Repositórios Públicos: {profile.public_repos}</p>
        )}
        {profile.html_url && (
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Ver no GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default React.memo(ProfileInfo);
