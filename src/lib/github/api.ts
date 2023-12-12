import client from "../urql";
import { User } from "./user";
import { Repo } from "./repo";

export async function getRepos(login: string) : Promise<[Repo]> {
  const query = `
    query Repos($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
          totalCount
          nodes {
            id
            name
            description
            url
            primaryLanguage {
              name
              color
            }
            issues {
              totalCount
            }
            pullRequests {
              totalCount
            }
            stargazerCount
            forkCount
            createdAt
            updatedAt
          }
        }
      }
    }
  `;

  return await client.query(query, { login: login })
    .toPromise()
    .then(response => {
      if (response.error) {
        return [];
      } else {
        return response.data.user.repositories.nodes.map((repo: any) => {
          return new Repo(repo);
        });
      }
    });
}

export async function getUser(login: string) : Promise<User | null> {
  const query = `
    query User($login: String!) {
      user(login: $login) {
        avatarUrl
        name
        bio
        url
        followers {
          totalCount
        }
        following {
          totalCount
        }
      }
    }
  `;

  return await client.query(query, { login: login })
    .toPromise()
    .then(response => {
      if (response.error) {
        return null;
      } else {
        return new User(response.data.user);
      }
    });
}