"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  function search(e: React.FormEvent) {
    router.push(`/users/${username}`);
    e.preventDefault();
  }

  return (
    <form className="d-flex justify-content-center search-form" onSubmit={e => search(e)}>
      <input type="text" className="form-control w-auto" id="username" placeholder="Enter a username" required
        onChange={(e) => setUsername(e.target.value)} />
      <input type="submit" className="btn btn-primary" value="Search" />
    </form>
  );
}