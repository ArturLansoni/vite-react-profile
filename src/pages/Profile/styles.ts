import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  h1 {
    margin-top: 64px;
  }

  p {
    margin: 24px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  > img {
    border-radius: 100%;
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }

  button {
    margin-left: auto;
    background-color: var(--background);
    border: 0;
  }
  .center {
    text-align: center;
  }
`;

const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Repo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;

  a {
    color: #2f81f7;
  }

  p {
    margin: 0;
    color: #7d8590;
  }
`;

const Topics = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: 14px;
    font-weight: bold;
    margin: 0 0.125em 0.333em 0;
    padding: 0 7px;
    color: #2f81f7;
    background: #388bfd1a;
    border-radius: 2em;
    padding: 0 10px;
    white-space: nowrap;
  }
`;

const Language = styled.p`
  margin-right: 2rem;
`;

export { ProfileContainer, RepoList, Repo, Topics, Language };
