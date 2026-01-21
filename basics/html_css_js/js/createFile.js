import fs from "fs";
export const createFile = (fileName, content) => {
  const file = fs.writeFileSync(`files/${fileName}`, content);
};
