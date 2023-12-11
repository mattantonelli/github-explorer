export class Repo {
  id: string;
  name: string;
  description: string;
  url: string;
  primaryLanguage: { name: string, color: string};
  issues: number;
  pullRequests: number;
  stars: number;
  forks: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.url = data.url;
    this.primaryLanguage = data.primaryLanguage;
    this.issues = data.issues.totalCount;
    this.pullRequests = data.pullRequests.totalCount;
    this.stars = data.stargazerCount;
    this.forks = data.forkCount;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
  }
}