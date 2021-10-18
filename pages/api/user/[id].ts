import { getUsers, updateUserName } from "data/functions";
import { ALLOWED_METHODS } from "utils/constants";

export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "Valid id required" });
  }

  if (!ALLOWED_METHODS.includes(method)) {
    res.setHeader("Allow", ALLOWED_METHODS);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const user = getUsers().find((user) => user.id === Number(id));

  if (user) {
    if (name && method === "PUT") updateUserName(id, name);

    return res
      .status(200)
      .json({ id, name: name || user.name || `User ${id}` });
  }

  return res.status(404).json({ error: `User ${id} not found.` });
}
