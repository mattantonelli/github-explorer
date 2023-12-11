/* eslint-disable @next/next/no-img-element */
import { getUser } from "@/lib/github/api";

export default async function User({ username } : { username: string }) {
  const user = await getUser(username);

  return (
    <div className="d-flex flex-column">
      <img src={user.avatarUrl} alt="User avatar" className="avatar mb-2" />
      <span>{user.name}</span>
      <small>{username}</small>
      <p className="my-2">{user.bio}</p>
      <div className="d-flex">
        <span>{user.followers} Followers</span>
        <span>&nbsp;&mdash;&nbsp;</span>
        <span>{user.following} Following</span>
      </div>
    </div>
  );
}