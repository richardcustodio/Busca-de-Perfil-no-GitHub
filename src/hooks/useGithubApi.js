import { useState, useCallback } from "react";

const useGithubApi = () => {
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = useCallback(async (username) => {
    setProfileData(null);
    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage(
            "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente."
          );
        } else {
          setErrorMessage("Ocorreu um erro ao buscar o perfil.");
        }
      } else {
        const data = await response.json();
        setProfileData(data);
      }
    } catch {
      // Removendo a variável 'error'
      setErrorMessage("Ocorreu um erro de rede.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { profileData, errorMessage, loading, fetchProfile };
};

export default useGithubApi;
