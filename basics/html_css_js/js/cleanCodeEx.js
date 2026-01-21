import { AddNewUser } from "./utils/AddNesUser.js";
import { createFile } from "./createFile.js";
import { users } from "./data/users.js";
import { formateFileContent } from "./utils/formateFileContent.js";
import { deleteFile } from "./deleteFiles.js";
// import formateFileContent from "./utils/formateFileContent.js";

const user = {
  name: "new user",
  salary: 7483387,
  role: "fiuehurh",
  age: 0,
};

// AddNewUser(user);


users.forEach((user) =>
  createFile(`${user.name}.txt`, formateFileContent(user)),
deleteFile(user.name)
);
