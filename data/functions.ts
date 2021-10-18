import { readFileSync, writeFileSync } from "fs";
import { USER_DATA } from "utils/constants";

export const getUsers = () => JSON.parse(readFileSync(USER_DATA).toString());

export const updateUserName = (id: number, name: string) =>
  writeFileSync(
    USER_DATA,
    JSON.stringify(
      getUsers().map((user) => {
        if (user.id === Number(id)) {
          user.name = name;
        }

        return user;
      })
    )
  );
