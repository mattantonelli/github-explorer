export class User {
  name: string;
  avatarUrl: string;
  bio: string;
  url: string;
  followers: number;
  following: number;

  constructor(data: any) {
    this.name = data.name;
    this.avatarUrl = data.avatarUrl;
    this.bio = data.bio;
    this.url = data.url;
    this.followers = data.followers.totalCount;
    this.following = data.following.totalCount;
  }
}