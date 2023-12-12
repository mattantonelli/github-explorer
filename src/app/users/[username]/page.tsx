import Repos from "@/components/repos";
import User from "@/components/user";

interface UserParams {
  params: { username: string }
}

export default function UserProfile({ params } : UserParams) {
  return (
    <div className="row">
      <div className="col-12 col-sm-3 mb-3 mb-sm-0">
        <User username={params.username} />
      </div>
      <div className="col-12 col-sm-9 ps-sm-4">
        <Repos username={params.username} />
      </div>
    </div>
  );
}