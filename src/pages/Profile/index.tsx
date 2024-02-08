import { useEffect } from "react";
import { AndroidIcon, FiapIcon, FlutterIcon, GithubIcon, RefreshIcon, SwiftIcon, } from "../../components/icons/";
import { ProfileContainer, RepoList, Repo, Topics, Language } from "./styles";
import { useProfile } from "./useProfile";
import { Loader, IconLink } from "./components";

function Profile() {
    const {
        hasError,
        isLoading,
        repositories,
        loadRepositories
    } = useProfile()
    useEffect(() => {
        loadRepositories()
    }, [])

    return (<ProfileContainer>
        <img
            src="https://avatars.githubusercontent.com/u/47609390?v=4"
            alt="profile picture"
        />
        <h1 className="center">Artur Lansoni</h1>


        <div>
            <p>
                Desenvolvedor mobile na

                <IconLink
                    url="https://levva.io/"
                    icon={<img src="/assets/logo-levva.png" alt="logo levva" style={{ width: 48 }} />}
                />
            </p>

            <p>
                Cursando MBA Mobile Development na

                <IconLink
                    url="https://www.fiap.com.br/"
                    icon={<FiapIcon size={12} />}
                />
            </p>

            <p>
                Tech stack

                <IconLink
                    url="https://flutter.dev/"
                    icon={<FlutterIcon />}
                />
                <IconLink
                    url="https://developer.android.com/"
                    icon={<AndroidIcon />}
                />
                <IconLink
                    url="https://developer.apple.com/"
                    icon={<SwiftIcon />}
                />

            </p>

            <p>
                Repositórios
                <IconLink
                    url="https://github.com/ArturLansoni"
                    icon={<GithubIcon />}
                />

                <button onClick={loadRepositories}>
                    <RefreshIcon />
                </button>
            </p>
            {!isLoading && hasError ? <h3 className="center">Ops, ocorreu um erro ao buscar os reposiórios</h3> : <></>}
            {isLoading ? <Loader /> : <></>}
            {!isLoading && !hasError ?
                <RepoList>
                    {
                        repositories.map(repo => (<Repo>
                            <a href={repo.url} target="_blank">
                                <h3>{repo.name}</h3>
                            </a>
                            <p>{repo.description}</p>
                            <Topics>{repo.topics.map(topic => (
                                <p>{topic}</p>
                            ))}
                            </Topics>
                            <p><Language>{!!repo.language ? repo.language : 'none'}</Language>  {repo.updatedAt}</p>
                        </Repo>))
                    }
                </RepoList>
                : <></>}
        </div>

    </ProfileContainer >);
}

export { Profile };