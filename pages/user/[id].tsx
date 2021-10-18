import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import { useRouter } from "next/router";
import useSwr from "swr";
import { fetcher } from "utils/fetcher";

export default function User() {
  const {
    query: { id },
  } = useRouter();
  const { data, error } = useSwr(id ? `/api/user/${id}` : null, fetcher);

  if (error) return <ErrorMessage message="Failed to load user" />;
  if (!data) return <Loading />;

  return <div>{data.name}</div>;
}
