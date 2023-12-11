import Repos from "@/components/repos";
import User from "@/components/user";

interface UserParams {
  params: { username: string }
}

export default function UserProfile({ params } : UserParams) {
  return (
    <div className="row">
      <div className="col-2 offset-2">
        <User username={params.username} />
      </div>
      <div className="col-6 ps-4">
        <h3>Popular Repositories</h3>
        <Repos username={params.username} />
      </div>
    </div>
  );
}