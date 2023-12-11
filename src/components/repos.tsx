import { getRepos } from "@/lib/github/api";
import { Repo } from "@/lib/github/repo";

export default async function Repos({ username } : { username: string }) {
  const repos = await getRepos(username);

  return (
    <div className="d-flex flex-column">
      {repos.map((repo: Repo) => {
        return (
          <div key={repo.id} className="d-flex flex-column repo">
            <a href={repo.url} target="_blank">{repo.name}</a>
            <p>{repo.description}</p>
            <div className="d-flex align-items-center stats">
              {repo.primaryLanguage && (
                <div>
                  <span className="language-circle" style={{backgroundColor: repo.primaryLanguage.color}} />
                  {repo.primaryLanguage.name}
                </div>
              )}
              <span>Stars: {repo.stars}</span>
              <span>Forks: {repo.forks}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}