import Repos from "@/components/repos";
import User from "@/components/user";

interface UserParams {
  params: { username: string }
}

export default function UserProfile({ params } : UserParams) {
  return (
    <div className="row">
      <div className="col-3">
        <User username={params.username} />
      </div>
      <div className="col-9 ps-4">
        <Repos username={params.username} />
      </div>
    </div>
  );
}