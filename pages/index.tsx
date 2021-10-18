import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import Link from "next/link";
import React from "react";
import useSwr from "swr";
import { fetcher } from "utils/fetcher";

export default function Index() {
  const { data, error } = useSwr("/api/users", fetcher);

  if (error) return <ErrorMessage message="Failed to load users" />;
  if (!data) return <Loading />;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
