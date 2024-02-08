import { useState } from "react";
import { httpGET } from "../../infra/httpClient";
import { GITHUB_USERNAME } from "../../constants";
import { formatDate } from "../../utils/formatters";

function useProfile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function loadRepositories(): Promise<void> {
    setIsLoading(true);

    const result = await httpGET(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated_at`
    );
    if (result == undefined) {
      setRepositories([]);
      setHasError(true);
      setIsLoading(false);
      return;
    }
    const list = result.map((json: any) => formatRepositories(json));
    setRepositories(list);
    setIsLoading(false);
  }

  return {
    hasError,
    isLoading,
    repositories,
    loadRepositories,
  };
}

function formatRepositories(json: any): Repository {
  return {
    description: json["description"],
    language: json["language"],
    topics: json["topics"],
    name: json["name"],
    url: json["html_url"],
    updatedAt: formatDate(json["updated_at"]),
  };
}

export { useProfile };
