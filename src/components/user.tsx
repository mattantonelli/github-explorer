/* eslint-disable @next/next/no-img-element */
import { getUser } from "@/lib/github/api";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function User({ username } : { username: string }) {
  const user = await getUser(username);

  if (user !== null) {
    return (
      <div className="d-flex flex-column">
        <img src={user.avatarUrl} alt="User avatar" className="avatar mb-3" />
        <h5 className="mb-0">{user.name}</h5>
        <small>{username}</small>
        <p className="my-2">{user.bio}</p>
        <div className="d-flex flex-wrap">
          <a href={`${user.url}?tab=followers`} className="link-unstyled" target="_blank">
            <FontAwesomeIcon icon={faUserGroup} /> {user.followers} Followers
          </a>
          <span>&nbsp;&mdash;&nbsp;</span>
          <a href={`${user.url}?tab=following`} className="link-unstyled" target="_blank">
            {user.following} Following
          </a>
        </div>
      </div>
    );
  }
}