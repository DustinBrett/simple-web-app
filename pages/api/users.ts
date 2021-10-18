import fs from "fs";

export default function handler(_req, res) {
  fs.readFile("data/users.json", (err, data) => {
    res.status(200).json(data);
  });
}
