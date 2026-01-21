import fs from "fs";
export const deleteFile = (fileName) => fs.unlinkSync(`files/${fileName}.txt`);
